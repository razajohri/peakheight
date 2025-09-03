import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Dimensions
} from 'react-native';

import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import ProgressBar from '../components/UI/ProgressBar';

// import { DatabaseService } from '../services/database';
import {
  COLORS,
  DAILY_TIPS,
  HABIT_TYPES,
  DEFAULT_VALUES
} from '../utils/constants';

const { width } = Dimensions.get('window');

export default function Dashboard({ user, onLogout }) {
  const [userData, setUserData] = useState(null);
  const [habitLogs, setHabitLogs] = useState([]);
  const [currentTip, setCurrentTip] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  // const databaseService = new DatabaseService();

  useEffect(() => {
    loadUserData();
    startTipRotation();
  }, []);

  const loadUserData = async () => {
    try {
      // For demo purposes, simulate loading user data
      const mockUserData = {
        height: 178,
        age: 25,
        height_change: 0.5,
        onboarding_complete: true
      };
      
      const mockHabitLogs = [
        { id: 1, habit_type: 'sleep', value: 8, date: '2025-08-30', user_id: user.id },
        { id: 2, habit_type: 'stretch', value: 15, date: '2025-08-30', user_id: user.id },
        { id: 3, habit_type: 'sleep', value: 7, date: '2025-08-29', user_id: user.id },
      ];
      
      setUserData(mockUserData);
      setHabitLogs(mockHabitLogs);
    } catch (error) {
      console.error('Failed to load user data:', error);
      Alert.alert('Error', 'Failed to load your data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const startTipRotation = () => {
    setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % DAILY_TIPS.length);
    }, 5000);
  };

  const logHabit = async (habitType) => {
    try {
      // For demo purposes, simulate logging habit
      const newLog = {
        id: Date.now(),
        habit_type: habitType,
        value: 1,
        date: new Date().toISOString().split('T')[0],
        user_id: user.id
      };
      
      setHabitLogs([...habitLogs, newLog]);
      Alert.alert('Success', 'Habit logged successfully!');
    } catch (error) {
      console.error('Failed to log habit:', error);
      Alert.alert('Error', 'Failed to log habit. Please try again.');
    }
  };

  const formatHeight = (heightValue) => {
    if (typeof heightValue === 'object' && heightValue.feet) {
      return {
        display: `${heightValue.feet}'${heightValue.inches}"`,
        cm: Math.round((heightValue.feet * 12 + heightValue.inches) * 2.54)
      };
    } else {
      const cm = heightValue || DEFAULT_VALUES.HEIGHT_CM;
      const totalInches = cm / 2.54;
      const feet = Math.floor(totalInches / 12);
      const inches = Math.round(totalInches % 12);
      return {
        display: `${feet}'${inches}"`,
        cm: cm
      };
    }
  };

  const calculateGrowthScore = () => {
    // Simple calculation based on recent habit logs
    const recentLogs = habitLogs.filter(log => {
      const logDate = new Date(log.date);
      const daysDiff = (new Date() - logDate) / (1000 * 60 * 60 * 24);
      return daysDiff <= 7;
    });

    const score = Math.min(100, (recentLogs.length / 7) * 100);
    return Math.round(score);
  };

  const calculateStreak = () => {
    if (!habitLogs.length) return 0;
    
    const sortedLogs = habitLogs.sort((a, b) => new Date(b.date) - new Date(a.date));
    let streak = 0;
    let currentDate = new Date();
    
    for (const log of sortedLogs) {
      const logDate = new Date(log.date);
      const daysDiff = Math.floor((currentDate - logDate) / (1000 * 60 * 60 * 24));
      
      if (daysDiff === streak) {
        streak++;
        currentDate = logDate;
      } else {
        break;
      }
    }
    
    return streak;
  };

  const getTodaysHabits = () => {
    const today = new Date().toISOString().split('T')[0];
    return habitLogs.filter(log => log.date === today);
  };

  const renderHeader = () => {
    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return (
      <View style={styles.header}>
        <View style={styles.dateContainer}>
          <Text style={styles.greeting}>Good morning!</Text>
          <Text style={styles.date}>{currentDate}</Text>
        </View>
        <TouchableOpacity style={styles.profileButton} onPress={() => setActiveTab('profile')}>
          <Text style={styles.profileEmoji}>👤</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderHeightWidget = () => {
    const currentHeight = formatHeight(userData?.height || DEFAULT_VALUES.HEIGHT_CM);
    const heightChange = userData?.height_change || 0.5;
    const growthScore = calculateGrowthScore();
    const streak = calculateStreak();

    return (
      <Card style={styles.heightWidget}>
        <View style={styles.heightDisplay}>
          <View style={styles.currentHeight}>
            <Text style={styles.heightLabel}>Current Height</Text>
            <Text style={styles.heightValue}>{currentHeight.display}</Text>
            <Text style={styles.heightCm}>({currentHeight.cm} cm)</Text>
            <View style={styles.heightChange}>
              <Text style={styles.changeIcon}>↗️</Text>
              <Text style={styles.changeText}>+{heightChange}" this month</Text>
            </View>
          </View>

          <View style={styles.growthScore}>
            <View style={styles.scoreCircle}>
              <Text style={styles.scoreNumber}>{growthScore}</Text>
              <Text style={styles.scoreLabel}>Growth Score</Text>
            </View>
          </View>
        </View>

        <View style={styles.streakDisplay}>
          <Text style={styles.streakIcon}>🔥</Text>
          <Text style={styles.streakText}>{streak} Day Streak</Text>
        </View>

        <View style={styles.dailyTip}>
          <Text style={styles.tipIcon}>💡</Text>
          <Text style={styles.tipText}>{DAILY_TIPS[currentTip]}</Text>
        </View>
      </Card>
    );
  };

  const renderQuickActions = () => {
    const todaysHabits = getTodaysHabits();
    const loggedHabits = new Set(todaysHabits.map(log => log.habit_type));

    return (
      <View style={styles.quickActions}>
        <Text style={styles.sectionTitle}>Today's Habits</Text>
        <View style={styles.actionButtons}>
          {Object.values(HABIT_TYPES).slice(0, 3).map((habit) => {
            const isLogged = loggedHabits.has(habit.id);
            return (
              <TouchableOpacity
                key={habit.id}
                style={[
                  styles.actionButton,
                  { backgroundColor: habit.color + '20' },
                  isLogged && styles.actionButtonLogged
                ]}
                onPress={() => !isLogged && logHabit(habit.id)}
                disabled={isLogged}
              >
                <Text style={styles.actionEmoji}>
                  {habit.id === 'sleep' ? '🌙' :
                   habit.id === 'posture' ? '🧍' :
                   habit.id === 'stretch' ? '🤸' : '💪'}
                </Text>
                <Text style={[
                  styles.actionLabel,
                  { color: habit.color },
                  isLogged && styles.actionLabelLogged
                ]}>
                  {isLogged ? '✓ ' : ''}Log {habit.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderProgressOverview = () => {
    const weeklyProgress = Object.values(HABIT_TYPES).map(habit => {
      const recentLogs = habitLogs.filter(log => {
        const logDate = new Date(log.date);
        const daysDiff = (new Date() - logDate) / (1000 * 60 * 60 * 24);
        return daysDiff <= 7 && log.habit_type === habit.id;
      });
      
      return {
        ...habit,
        progress: (recentLogs.length / 7) * 100
      };
    });

    return (
      <View style={styles.progressOverview}>
        <Text style={styles.sectionTitle}>Weekly Progress</Text>
        {weeklyProgress.map((habit) => (
          <View key={habit.id} style={styles.progressItem}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressEmoji}>
                {habit.id === 'sleep' ? '🌙' :
                 habit.id === 'posture' ? '🧍' :
                 habit.id === 'stretch' ? '🤸' :
                 habit.id === 'water' ? '💧' : '🍎'}
              </Text>
              <Text style={styles.progressName}>{habit.name}</Text>
              <Text style={styles.progressPercent}>{Math.round(habit.progress)}%</Text>
            </View>
            <ProgressBar
              progress={habit.progress}
              progressColor={habit.color}
              height={6}
              style={styles.progressBarStyle}
            />
          </View>
        ))}
      </View>
    );
  };

  const renderBottomNavigation = () => (
    <View style={styles.bottomNav}>
      <TouchableOpacity
        style={[styles.navButton, activeTab === 'home' && styles.navButtonActive]}
        onPress={() => setActiveTab('home')}
      >
        <Text style={styles.navEmoji}>🏠</Text>
        <Text style={[
          styles.navLabel,
          activeTab === 'home' && styles.navLabelActive
        ]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navButton, activeTab === 'habits' && styles.navButtonActive]}
        onPress={() => setActiveTab('habits')}
      >
        <Text style={styles.navEmoji}>📈</Text>
        <Text style={[
          styles.navLabel,
          activeTab === 'habits' && styles.navLabelActive
        ]}>
          Habits
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navButton, activeTab === 'insights' && styles.navButtonActive]}
        onPress={() => setActiveTab('insights')}
      >
        <Text style={styles.navEmoji}>🧠</Text>
        <Text style={[
          styles.navLabel,
          activeTab === 'insights' && styles.navLabelActive
        ]}>
          Insights
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navButton, activeTab === 'profile' && styles.navButtonActive]}
        onPress={() => setActiveTab('profile')}
      >
        <Text style={styles.navEmoji}>👤</Text>
        <Text style={[
          styles.navLabel,
          activeTab === 'profile' && styles.navLabelActive
        ]}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderProfileTab = () => (
    <View style={styles.profileTab}>
      <Card style={styles.profileCard}>
        <Text style={styles.profileName}>{user.email}</Text>
        <Text style={styles.profileEmail}>Premium Member</Text>
      </Card>

      <View style={styles.profileActions}>
        <Button
          title="Settings"
          variant="outline"
          style={styles.profileButton}
        />
        <Button
          title="Support"
          variant="outline"
          style={styles.profileButton}
        />
        <Button
          title="Logout"
          variant="outline"
          onPress={onLogout}
          style={[styles.profileButton, styles.logoutButton]}
          textStyle={styles.logoutButtonText}
        />
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading your data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {activeTab === 'home' && (
        <>
          {renderHeader()}
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {renderHeightWidget()}
            {renderQuickActions()}
            {renderProgressOverview()}
          </ScrollView>
        </>
      )}

      {activeTab === 'profile' && renderProfileTab()}

      {renderBottomNavigation()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND,
  },
  loadingText: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  dateContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
    marginBottom: 4,
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.SURFACE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileEmoji: {
    fontSize: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  heightWidget: {
    marginBottom: 24,
    padding: 20,
  },
  heightDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  currentHeight: {
    flex: 1,
  },
  heightLabel: {
    fontSize: 14,
    color: COLORS.TEXT_SECONDARY,
    marginBottom: 4,
  },
  heightValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 4,
  },
  heightCm: {
    fontSize: 14,
    color: COLORS.TEXT_SECONDARY,
    marginBottom: 8,
  },
  heightChange: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeIcon: {
    fontSize: 16,
    marginRight: 4,
  },
  changeText: {
    fontSize: 14,
    color: COLORS.SUCCESS,
    fontWeight: '600',
  },
  growthScore: {
    alignItems: 'center',
  },
  scoreCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.PRIMARY + '20',
    borderWidth: 3,
    borderColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
  },
  scoreLabel: {
    fontSize: 10,
    color: COLORS.TEXT_SECONDARY,
    marginTop: 8,
  },
  streakDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  streakIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  streakText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.TEXT_PRIMARY,
  },
  dailyTip: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: COLORS.PRIMARY + '10',
    borderRadius: 12,
    padding: 16,
  },
  tipIcon: {
    fontSize: 20,
    marginRight: 12,
    marginTop: 2,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    color: COLORS.TEXT_PRIMARY,
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 16,
  },
  quickActions: {
    marginBottom: 32,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  actionButtonLogged: {
    borderColor: COLORS.SUCCESS,
    backgroundColor: COLORS.SUCCESS + '20',
  },
  actionEmoji: {
    fontSize: 24,
    marginBottom: 8,
  },
  actionLabel: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  actionLabelLogged: {
    color: COLORS.SUCCESS,
  },
  progressOverview: {
    marginBottom: 32,
  },
  progressItem: {
    marginBottom: 20,
  },
  progressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressEmoji: {
    fontSize: 16,
    marginRight: 8,
  },
  progressName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.TEXT_PRIMARY,
  },
  progressPercent: {
    fontSize: 14,
    color: COLORS.TEXT_SECONDARY,
    fontWeight: '600',
  },
  progressBarStyle: {
    marginTop: 4,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: COLORS.SURFACE,
    borderTopWidth: 1,
    borderTopColor: COLORS.BORDER,
    paddingBottom: 34,
    paddingTop: 12,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navButtonActive: {
    backgroundColor: COLORS.PRIMARY + '20',
  },
  navEmoji: {
    fontSize: 20,
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 12,
    color: COLORS.TEXT_SECONDARY,
    fontWeight: '500',
  },
  navLabelActive: {
    color: COLORS.PRIMARY,
    fontWeight: '600',
  },
  profileTab: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  profileCard: {
    alignItems: 'center',
    marginBottom: 32,
    padding: 24,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 16,
    color: COLORS.SUCCESS,
    fontWeight: '600',
  },
  profileActions: {
    gap: 16,
  },
  profileButton: {
    borderRadius: 12,
  },
  logoutButton: {
    borderColor: COLORS.DANGER,
  },
  logoutButtonText: {
    color: COLORS.DANGER,
  },
});