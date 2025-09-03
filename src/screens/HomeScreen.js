import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold,
} from "@expo-google-fonts/roboto-condensed";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Ruler,
  Users,
  Calendar,
  TrendingUp,
  Target,
  Activity,
} from "lucide-react-native";
import { useState, useEffect } from "react";
import ScreenContainer from "../components/ScreenContainer";
import { useTheme } from "../hooks/useTheme";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
  });

  useEffect(() => {
    fetchUserProgress();
  }, []);

  const fetchUserProgress = async () => {
    try {
      setLoading(true);
      // Mock data for now since we don't have API endpoints
      setProgress({
        currentHeight: "5'8\"",
        monthlyGrowth: "+0.5\"",
        postureScore: "85%",
        exerciseStreak: 12
      });
    } catch (err) {
      console.error("Error fetching progress:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  const progressCards = [
    {
      title: "Current Height",
      value: progress?.currentHeight || "5'8\"",
      subtitle: progress?.monthlyGrowth + " this month" || '+0.5" this month',
      icon: Ruler,
      backgroundColor: colors.heightGreen,
      trend: "up",
    },
    {
      title: "Posture Score",
      value: progress?.postureScore || "85%",
      subtitle: "Good posture",
      icon: Users,
      backgroundColor: colors.postureBlue,
      trend: "up",
    },
    {
      title: "Growth Streak",
      value: progress?.exerciseStreak
        ? `${progress.exerciseStreak} days`
        : "12 days",
      subtitle: "Keep it up!",
      icon: Target,
      backgroundColor: colors.habitPurple,
      trend: "up",
    },
  ];

  const todayActivities = [
    { title: "Morning Stretches", completed: true, time: "7:00 AM" },
    { title: "Posture Check", completed: true, time: "12:00 PM" },
    { title: "Height Measurement", completed: false, time: "8:00 PM" },
    { title: "Sleep Preparation", completed: false, time: "10:00 PM" },
  ];

  if (loading) {
    return (
      <ScreenContainer>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              fontFamily: "RobotoCondensed_400Regular",
              fontSize: 16,
              color: colors.textSecondary,
            }}
          >
            Loading your progress...
          </Text>
        </View>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View
          style={{
            paddingHorizontal: 24,
            paddingTop: insets.top + 20,
            paddingBottom: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoCondensed_400Regular",
              fontSize: 16,
              color: colors.textSecondary,
            }}
          >
            Good morning,
          </Text>
          <Text
            style={{
              fontFamily: "RobotoCondensed_700Bold",
              fontSize: 28,
              color: colors.textPrimary,
              marginTop: 4,
            }}
          >
            Alex
          </Text>
        </View>

        {/* Progress Cards */}
        <View
          style={{
            paddingHorizontal: 24,
            marginBottom: 32,
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoCondensed_700Bold",
              fontSize: 20,
              color: colors.textPrimary,
              marginBottom: 16,
            }}
          >
            Your Progress
          </Text>

          <View style={{ gap: 16 }}>
            {progressCards.map((card, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor: card.backgroundColor,
                  borderRadius: 16,
                  padding: 20,
                  flexDirection: "row",
                  alignItems: "center",
                }}
                activeOpacity={0.9}
              >
                <View
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: colors.surfaceElevated,
                    borderRadius: 12,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <card.icon size={24} color={colors.textPrimary} />
                </View>

                <View style={{ flex: 1, marginLeft: 16 }}>
                  <Text
                    style={{
                      fontFamily: "RobotoCondensed_400Regular",
                      fontSize: 14,
                      color: colors.textSecondary,
                    }}
                  >
                    {card.title}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "RobotoCondensed_700Bold",
                      fontSize: 24,
                      color: colors.textPrimary,
                      marginTop: 2,
                    }}
                  >
                    {card.value}
                  </Text>
                </View>

                <View style={{ alignItems: "flex-end" }}>
                  <TrendingUp size={16} color={colors.success} />
                  <Text
                    style={{
                      fontFamily: "RobotoCondensed_400Regular",
                      fontSize: 12,
                      color: colors.textSecondary,
                      marginTop: 4,
                    }}
                  >
                    {card.subtitle}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Today's Activities */}
        <View
          style={{
            paddingHorizontal: 24,
            marginBottom: 32,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontFamily: "RobotoCondensed_700Bold",
                fontSize: 20,
                color: colors.textPrimary,
              }}
            >
              Today's Activities
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: "RobotoCondensed_400Regular",
                  fontSize: 14,
                  color: colors.accent,
                }}
              >
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ gap: 12 }}>
            {todayActivities.map((activity, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor: colors.surface,
                  borderRadius: 12,
                  padding: 16,
                  flexDirection: "row",
                  alignItems: "center",
                }}
                activeOpacity={0.9}
              >
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    backgroundColor: activity.completed
                      ? colors.success
                      : colors.border,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 12,
                  }}
                >
                  {activity.completed && (
                    <View
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: colors.surfaceElevated,
                      }}
                    />
                  )}
                </View>

                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontFamily: "RobotoCondensed_700Bold",
                      fontSize: 16,
                      color: activity.completed
                        ? colors.textSecondary
                        : colors.textPrimary,
                      textDecorationLine: activity.completed
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {activity.title}
                  </Text>
                </View>

                <Text
                  style={{
                    fontFamily: "RobotoCondensed_400Regular",
                    fontSize: 14,
                    color: colors.textSecondary,
                  }}
                >
                  {activity.time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View
          style={{
            paddingHorizontal: 24,
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoCondensed_700Bold",
              fontSize: 20,
              color: colors.textPrimary,
              marginBottom: 16,
            }}
          >
            Quick Actions
          </Text>

          <View style={{ flexDirection: "row", gap: 12 }}>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: colors.surface,
                borderRadius: 12,
                padding: 16,
                alignItems: "center",
              }}
              activeOpacity={0.9}
            >
              <Activity size={24} color={colors.textPrimary} />
              <Text
                style={{
                  fontFamily: "RobotoCondensed_700Bold",
                  fontSize: 14,
                  color: colors.textPrimary,
                  marginTop: 8,
                  textAlign: "center",
                }}
              >
                Start Exercise
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: colors.surface,
                borderRadius: 12,
                padding: 16,
                alignItems: "center",
              }}
              activeOpacity={0.9}
            >
              <Ruler size={24} color={colors.textPrimary} />
              <Text
                style={{
                  fontFamily: "RobotoCondensed_700Bold",
                  fontSize: 14,
                  color: colors.textPrimary,
                  marginTop: 8,
                  textAlign: "center",
                }}
              >
                Log Height
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
