import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold,
} from "@expo-google-fonts/roboto-condensed";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  User,
  Target,
  Bell,
  Settings,
  HelpCircle,
  Share,
  Award,
  Calendar,
  TrendingUp,
} from "lucide-react-native";
import ScreenContainer from "../components/ScreenContainer";
import { useTheme } from "../hooks/useTheme";

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();

  const [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const achievements = [
    { title: "First Week", description: "Completed 7 days of exercises", icon: Calendar },
    { title: "Growth Tracker", description: "Logged height for 30 days", icon: TrendingUp },
    { title: "Posture Perfect", description: "85% posture score for a week", icon: Target },
  ];

  const menuItems = [
    { title: "Goals & Targets", icon: Target, color: colors.accent },
    { title: "Notifications", icon: Bell, color: colors.warning },
    { title: "Settings", icon: Settings, color: colors.textSecondary },
    { title: "Help & Support", icon: HelpCircle, color: colors.success },
    { title: "Share App", icon: Share, color: colors.textSecondary },
  ];

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
            Profile
          </Text>
        </View>

        {/* User Info Card */}
        <View
          style={{
            paddingHorizontal: 24,
            marginBottom: 32,
          }}
        >
          <View
            style={{
              backgroundColor: colors.surface,
              borderRadius: 16,
              padding: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <View
                style={{
                  width: 64,
                  height: 64,
                  backgroundColor: colors.accent,
                  borderRadius: 32,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <User size={32} color={colors.surfaceElevated} />
              </View>

              <View style={{ marginLeft: 16, flex: 1 }}>
                <Text
                  style={{
                    fontFamily: "RobotoCondensed_700Bold",
                    fontSize: 20,
                    color: colors.textPrimary,
                  }}
                >
                  Alex Johnson
                </Text>
                <Text
                  style={{
                    fontFamily: "RobotoCondensed_400Regular",
                    fontSize: 14,
                    color: colors.textSecondary,
                    marginTop: 2,
                  }}
                >
                  Growing since Aug 2024
                </Text>
              </View>
            </View>

            {/* Stats Row */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                backgroundColor: colors.background,
                borderRadius: 12,
                padding: 16,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    fontFamily: "RobotoCondensed_700Bold",
                    fontSize: 18,
                    color: colors.textPrimary,
                  }}
                >
                  5'8.5"
                </Text>
                <Text
                  style={{
                    fontFamily: "RobotoCondensed_400Regular",
                    fontSize: 12,
                    color: colors.textSecondary,
                    marginTop: 2,
                  }}
                >
                  Current Height
                </Text>
              </View>

              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    fontFamily: "RobotoCondensed_700Bold",
                    fontSize: 18,
                    color: colors.textPrimary,
                  }}
                >
                  12
                </Text>
                <Text
                  style={{
                    fontFamily: "RobotoCondensed_400Regular",
                    fontSize: 12,
                    color: colors.textSecondary,
                    marginTop: 2,
                  }}
                >
                  Day Streak
                </Text>
              </View>

              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    fontFamily: "RobotoCondensed_700Bold",
                    fontSize: 18,
                    color: colors.textPrimary,
                  }}
                >
                  85%
                </Text>
                <Text
                  style={{
                    fontFamily: "RobotoCondensed_400Regular",
                    fontSize: 12,
                    color: colors.textSecondary,
                    marginTop: 2,
                  }}
                >
                  Posture Score
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Achievements */}
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
            Achievements
          </Text>

          <View style={{ gap: 12 }}>
            {achievements.map((achievement, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: colors.surface,
                  borderRadius: 12,
                  padding: 16,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: colors.warning + "20",
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 12,
                  }}
                >
                  <Award size={20} color={colors.warning} />
                </View>

                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontFamily: "RobotoCondensed_700Bold",
                      fontSize: 16,
                      color: colors.textPrimary,
                    }}
                  >
                    {achievement.title}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "RobotoCondensed_400Regular",
                      fontSize: 14,
                      color: colors.textSecondary,
                      marginTop: 2,
                    }}
                  >
                    {achievement.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Menu Items */}
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
            Settings
          </Text>

          <View style={{ gap: 12 }}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor: colors.surface,
                  borderRadius: 12,
                  padding: 16,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                activeOpacity={0.9}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: item.color + "20",
                      borderRadius: 20,
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 12,
                    }}
                  >
                    <item.icon size={20} color={item.color} />
                  </View>

                  <Text
                    style={{
                      fontFamily: "RobotoCondensed_700Bold",
                      fontSize: 16,
                      color: colors.textPrimary,
                    }}
                  >
                    {item.title}
                  </Text>
                </View>

                <View
                  style={{
                    width: 6,
                    height: 6,
                    backgroundColor: colors.textSecondary,
                    borderRadius: 3,
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
