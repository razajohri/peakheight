import { SupabaseService } from './supabase';

export class DatabaseService {
  constructor() {
    this.client = SupabaseService.getClient();
  }

  // User profile methods
  async createUserProfile(userId, profileData) {
    try {
      const { data, error } = await this.client
        .from('users')
        .insert([{
          id: userId,
          ...profileData,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }]);

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Create user profile failed:', error);
      throw error;
    }
  }

  async getUserData(userId) {
    try {
      const { data, error } = await this.client
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      return data;
    } catch (error) {
      console.error('Get user data failed:', error);
      throw error;
    }
  }

  async updateUserProfile(userId, updates) {
    try {
      const { data, error } = await this.client
        .from('users')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', userId);

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Update user profile failed:', error);
      throw error;
    }
  }

  // Onboarding methods
  async saveOnboardingData(userId, onboardingData) {
    try {
      const userData = await this.getUserData(userId);
      
      if (userData) {
        // Update existing user
        return await this.updateUserProfile(userId, {
          height: onboardingData.height,
          age: onboardingData.age,
          gender: onboardingData.gender,
          parents_height: onboardingData.parentsHeight,
          dream_height: onboardingData.dreamHeight,
          motivation: onboardingData.motivation,
          barriers: onboardingData.barriers,
          promo_code: onboardingData.promoCode,
          onboarding_data: onboardingData
        });
      } else {
        // Create new user profile
        return await this.createUserProfile(userId, {
          height: onboardingData.height,
          age: onboardingData.age,
          gender: onboardingData.gender,
          parents_height: onboardingData.parentsHeight,
          dream_height: onboardingData.dreamHeight,
          motivation: onboardingData.motivation,
          barriers: onboardingData.barriers,
          promo_code: onboardingData.promoCode,
          onboarding_data: onboardingData,
          onboarding_complete: false
        });
      }
    } catch (error) {
      console.error('Save onboarding data failed:', error);
      throw error;
    }
  }

  async markOnboardingComplete(userId) {
    try {
      const { data, error } = await this.client
        .from('users')
        .update({ 
          onboarding_complete: true,
          updated_at: new Date().toISOString()
        })
        .eq('id', userId);

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Mark onboarding complete failed:', error);
      throw error;
    }
  }

  // Habit tracking methods
  async logHabit(userId, habitType, value, date = new Date()) {
    try {
      const { data, error } = await this.client
        .from('habit_logs')
        .insert([{
          user_id: userId,
          habit_type: habitType,
          value: value,
          date: date.toISOString().split('T')[0], // YYYY-MM-DD format
          created_at: new Date().toISOString()
        }]);

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Log habit failed:', error);
      throw error;
    }
  }

  async getHabitLogs(userId, startDate = null, endDate = null) {
    try {
      let query = this.client
        .from('habit_logs')
        .select('*')
        .eq('user_id', userId)
        .order('date', { ascending: false });

      if (startDate) {
        query = query.gte('date', startDate.toISOString().split('T')[0]);
      }
      
      if (endDate) {
        query = query.lte('date', endDate.toISOString().split('T')[0]);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Get habit logs failed:', error);
      throw error;
    }
  }

  async getTodaysHabits(userId) {
    try {
      const today = new Date().toISOString().split('T')[0];
      const { data, error } = await this.client
        .from('habit_logs')
        .select('*')
        .eq('user_id', userId)
        .eq('date', today);

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Get today\'s habits failed:', error);
      throw error;
    }
  }

  // Subscription methods
  async updateSubscription(userId, subscriptionData) {
    try {
      const { data, error } = await this.client
        .from('users')
        .update({
          subscription_status: subscriptionData.status,
          subscription_plan: subscriptionData.plan,
          subscription_expires_at: subscriptionData.expiresAt,
          updated_at: new Date().toISOString()
        })
        .eq('id', userId);

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Update subscription failed:', error);
      throw error;
    }
  }

  // Height tracking methods
  async logHeight(userId, height, unit = 'cm') {
    try {
      const { data, error } = await this.client
        .from('height_logs')
        .insert([{
          user_id: userId,
          height: height,
          unit: unit,
          measured_at: new Date().toISOString(),
          created_at: new Date().toISOString()
        }]);

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Log height failed:', error);
      throw error;
    }
  }

  async getHeightHistory(userId) {
    try {
      const { data, error } = await this.client
        .from('height_logs')
        .select('*')
        .eq('user_id', userId)
        .order('measured_at', { ascending: true });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Get height history failed:', error);
      throw error;
    }
  }

  // Analytics methods
  async getGrowthAnalytics(userId) {
    try {
      const [heightHistory, habitLogs] = await Promise.all([
        this.getHeightHistory(userId),
        this.getHabitLogs(userId)
      ]);

      // Calculate growth trends, habit consistency, etc.
      const analytics = {
        heightHistory,
        habitLogs,
        growthTrend: this.calculateGrowthTrend(heightHistory),
        habitConsistency: this.calculateHabitConsistency(habitLogs)
      };

      return analytics;
    } catch (error) {
      console.error('Get growth analytics failed:', error);
      throw error;
    }
  }

  // Helper methods
  calculateGrowthTrend(heightHistory) {
    if (heightHistory.length < 2) return 0;
    
    const recent = heightHistory.slice(-3);
    const oldest = recent[0];
    const newest = recent[recent.length - 1];
    
    return newest.height - oldest.height;
  }

  calculateHabitConsistency(habitLogs) {
    if (!habitLogs.length) return 0;
    
    const last7Days = new Array(7).fill(0).map((_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      return date.toISOString().split('T')[0];
    });
    
    const loggedDays = new Set(habitLogs.map(log => log.date));
    const consistency = last7Days.filter(day => loggedDays.has(day)).length;
    
    return Math.round((consistency / 7) * 100);
  }
}