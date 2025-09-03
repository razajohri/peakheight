import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold,
} from "@expo-google-fonts/roboto-condensed";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Move, Mountain, Moon, Users, Clock, Star } from "lucide-react-native";
import { useState, useEffect } from "react";
import ScreenContainer from "../components/ScreenContainer";
import { useTheme } from "../hooks/useTheme";

export default function ExercisesScreen() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const [categories, setCategories] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      // Mock data for now since we don't have API endpoints
      setCategories([
        { name: "Stretching", description: "Flexibility exercises", icon_name: "Move", exercise_count: 8 },
        { name: "Strengthening", description: "Build muscle strength", icon_name: "Mountain", exercise_count: 12 },
        { name: "Posture Correction", description: "Improve alignment", icon_name: "Users", exercise_count: 6 },
        { name: "Sleep Optimization", description: "Better rest habits", icon_name: "Moon", exercise_count: 4 }
      ]);
      setExercises([
        { name: "Morning Stretches", duration_minutes: 15, difficulty_level: "Beginner", category_name: "Stretching" },
        { name: "Core Strengthening", duration_minutes: 20, difficulty_level: "Intermediate", category_name: "Strengthening" },
        { name: "Posture Check", duration_minutes: 10, difficulty_level: "Beginner", category_name: "Posture Correction" }
      ]);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  const getIconForCategory = (iconName) => {
    switch (iconName) {
      case "Move":
        return Move;
      case "Mountain":
        return Mountain;
      case "Users":
        return Users;
      case "Moon":
        return Moon;
      default:
        return Move;
    }
  };

  const getCategoryColor = (categoryName) => {
    switch (categoryName?.toLowerCase()) {
      case "stretching":
        return colors.heightGreen;
      case "strengthening":
        return colors.postureBlue;
      case "posture correction":
        return colors.habitPurple;
      case "sleep optimization":
        return colors.accent + "20";
      default:
        return colors.surface;
    }
  };

  const exerciseCategories = categories.map((cat) => ({
    title: cat.name,
    subtitle: cat.description,
    icon: getIconForCategory(cat.icon_name),
    backgroundColor: getCategoryColor(cat.name),
    exerciseCount: parseInt(cat.exercise_count) || 0,
  }));

  // Get featured exercises (first 3)
  const featuredExercises = exercises.slice(0, 3).map((exercise) => ({
    title: exercise.name,
    duration: `${exercise.duration_minutes} min`,
    difficulty: exercise.difficulty_level,
    rating: 4.8, // Static for now
    category: exercise.category_name,
  }));

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
            Loading exercises...
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
              fontFamily: "RobotoCondensed_700Bold",
              fontSize: 28,
              color: colors.textPrimary,
            }}
          >
            Exercises
          </Text>
          <Text
            style={{
              fontFamily: "RobotoCondensed_400Regular",
              fontSize: 16,
              color: colors.textSecondary,
              marginTop: 4,
            }}
          >
            Build habits for maximum growth
          </Text>
        </View>

        {/* Exercise Categories */}
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
            Categories
          </Text>

          <View style={{ gap: 16 }}>
            {exerciseCategories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor: category.backgroundColor,
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
                  <category.icon size={24} color={colors.textPrimary} />
                </View>

                <View style={{ flex: 1, marginLeft: 16 }}>
                  <Text
                    style={{
                      fontFamily: "RobotoCondensed_700Bold",
                      fontSize: 18,
                      color: colors.textPrimary,
                    }}
                  >
                    {category.title}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "RobotoCondensed_400Regular",
                      fontSize: 14,
                      color: colors.textSecondary,
                      marginTop: 2,
                    }}
                  >
                    {category.subtitle}
                  </Text>
                </View>

                <View style={{ alignItems: "flex-end" }}>
                  <Text
                    style={{
                      fontFamily: "RobotoCondensed_700Bold",
                      fontSize: 16,
                      color: colors.textPrimary,
                    }}
                  >
                    {category.exerciseCount}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "RobotoCondensed_400Regular",
                      fontSize: 12,
                      color: colors.textSecondary,
                    }}
                  >
                    exercises
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Featured Exercises */}
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
              Featured Exercises
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
            {featuredExercises.map((exercise, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor: colors.surface,
                  borderRadius: 12,
                  padding: 16,
                }}
                activeOpacity={0.9}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RobotoCondensed_700Bold",
                      fontSize: 16,
                      color: colors.textPrimary,
                    }}
                  >
                    {exercise.title}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <Star
                      size={12}
                      color={colors.warning}
                      fill={colors.warning}
                    />
                    <Text
                      style={{
                        fontFamily: "RobotoCondensed_400Regular",
                        fontSize: 12,
                        color: colors.textSecondary,
                      }}
                    >
                      {exercise.rating}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <Clock size={12} color={colors.textSecondary} />
                    <Text
                      style={{
                        fontFamily: "RobotoCondensed_400Regular",
                        fontSize: 12,
                        color: colors.textSecondary,
                      }}
                    >
                      {exercise.duration}
                    </Text>
                  </View>

                  <View
                    style={{
                      backgroundColor: colors.borderLight,
                      borderRadius: 8,
                      paddingHorizontal: 8,
                      paddingVertical: 2,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "RobotoCondensed_400Regular",
                        fontSize: 10,
                        color: colors.textSecondary,
                      }}
                    >
                      {exercise.difficulty}
                    </Text>
                  </View>

                  <Text
                    style={{
                      fontFamily: "RobotoCondensed_400Regular",
                      fontSize: 12,
                      color: colors.textSecondary,
                    }}
                  >
                    {exercise.category}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Today's Workout */}
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
            Today's Workout
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: colors.accent,
              borderRadius: 16,
              padding: 20,
              alignItems: "center",
            }}
            activeOpacity={0.9}
          >
            <Text
              style={{
                fontFamily: "RobotoCondensed_700Bold",
                fontSize: 18,
                color: colors.surfaceElevated,
                marginBottom: 8,
              }}
            >
              Morning Growth Routine
            </Text>
            <Text
              style={{
                fontFamily: "RobotoCondensed_400Regular",
                fontSize: 14,
                color: colors.surfaceElevated,
                marginBottom: 16,
                textAlign: "center",
              }}
            >
              15 min • Stretching & Posture
            </Text>
            <View
              style={{
                backgroundColor: colors.surfaceElevated,
                borderRadius: 24,
                paddingHorizontal: 24,
                paddingVertical: 12,
              }}
            >
              <Text
                style={{
                  fontFamily: "RobotoCondensed_700Bold",
                  fontSize: 16,
                  color: colors.textPrimary,
                }}
              >
                START WORKOUT
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
