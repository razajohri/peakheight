import { SupabaseService } from './supabase';

export class AuthService {
  constructor() {
    this.client = SupabaseService.getClient();
  }

  // Sign up with email and password
  async signUp(email, password, userData = {}) {
    try {
      const { data, error } = await this.client.auth.signUp({
        email,
        password,
        options: {
          data: userData
        }
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Sign up failed:', error);
      throw error;
    }
  }

  // Sign in with email and password
  async signIn(email, password) {
    try {
      const { data, error } = await this.client.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Sign in failed:', error);
      throw error;
    }
  }

  // Sign in with Google
  async signInWithGoogle() {
    try {
      const { data, error } = await this.client.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'exp://localhost:19000' // Expo development URL
        }
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Google sign in failed:', error);
      throw error;
    }
  }

  // Sign in with Apple
  async signInWithApple() {
    try {
      const { data, error } = await this.client.auth.signInWithOAuth({
        provider: 'apple',
        options: {
          redirectTo: 'exp://localhost:19000'
        }
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Apple sign in failed:', error);
      throw error;
    }
  }

  // Sign in with Facebook
  async signInWithFacebook() {
    try {
      const { data, error } = await this.client.auth.signInWithOAuth({
        provider: 'facebook',
        options: {
          redirectTo: 'exp://localhost:19000'
        }
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Facebook sign in failed:', error);
      throw error;
    }
  }

  // Sign out
  async signOut() {
    try {
      const { error } = await this.client.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Sign out failed:', error);
      throw error;
    }
  }

  // Get current session
  async getCurrentSession() {
    try {
      const { data, error } = await this.client.auth.getSession();
      if (error) throw error;
      return data.session;
    } catch (error) {
      console.error('Get session failed:', error);
      throw error;
    }
  }

  // Get current user
  async getCurrentUser() {
    try {
      const { data, error } = await this.client.auth.getUser();
      if (error) throw error;
      return data.user;
    } catch (error) {
      console.error('Get user failed:', error);
      throw error;
    }
  }

  // Reset password
  async resetPassword(email) {
    try {
      const { error } = await this.client.auth.resetPasswordForEmail(email, {
        redirectTo: 'exp://localhost:19000/reset-password'
      });

      if (error) throw error;
    } catch (error) {
      console.error('Reset password failed:', error);
      throw error;
    }
  }

  // Update user data
  async updateUser(updates) {
    try {
      const { data, error } = await this.client.auth.updateUser(updates);
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Update user failed:', error);
      throw error;
    }
  }

  // Listen to auth state changes
  onAuthStateChange(callback) {
    return this.client.auth.onAuthStateChange((event, session) => {
      callback(event, session);
    });
  }
}