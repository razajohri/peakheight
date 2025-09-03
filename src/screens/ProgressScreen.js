import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold,
} from "@expo-google-fonts/roboto-condensed";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  TrendingUp,
  Calendar,
  Camera,
  Plus,
  BarChart3,
  Ruler,
} from "lucide-react-native";
import { useState, useEffect } from "react";
import ScreenContainer from "../components/ScreenContainer";
import { useTheme } from "../hooks/useTheme";

export default function ProgressScreen() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const [showHeightInput, setShowHeightInput] = useState(false);
  const [heightValue, setHeightValue] = useState("");
  const [measurements, setMeasurements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
  });

  useEffect(() => {
    fetchMeasurements();
  }, []);

  const fetchMeasurements = async () => {
    try {
      setLoading(true);
      // Mock data for now since we don't have API endpoints
      setMeasurements([
        { height_inches: 68.5, measurement_date: "2024-01-15" },
        { height_inches: 68.0, measurement_date: "2024-01-01" },
        { height_inches: 67.8, measurement_date: "2024-12-15" }
      ]);
    } catch (err) {
      console.error("Error fetching measurements:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddHeight = async () => {
    if (!heightValue.trim()) return;

    try {
      setSaving(true);

      // Convert feet and inches to total inches
      let totalInches;
      if (heightValue.includes("'")) {
        const parts = heightValue.replace(/['"]/g, "").split(/['\s]+/);
        const feet = parseInt(parts[0]) || 0;
        const inches = parseFloat(parts[1]) || 0;
        totalInches = feet * 12 + inches;
      } else {
        totalInches = parseFloat(heightValue);
      }

      if (isNaN(totalInches) || totalInches < 36 || totalInches > 96) {
        alert("Please enter a valid height between 3'0\" and 8'0\"");
        return;
      }

      // Mock save for now
      const newMeasurement = {
        height_inches: totalInches,
        measurement_date: new Date().toISOString().split("T")[0],
      };

      setMeasurements([newMeasurement, ...measurements]);
      setHeightValue("");
      setShowHeightInput(false);
    } catch (err) {
      console.error("Error saving measurement:", err);
      alert("Failed to save measurement. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  const formatHeight = (inches) => {
    const feet = Math.floor(inches / 12);
    const remainingInches = (inches % 12).toFixed(1);
    return `${feet}'${remainingInches}"`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const calculateChange = (current, previous) => {
    if (!previous) return "baseline";
    const diff = current - previous;
    return diff > 0 ? `+${diff.toFixed(1)}"` : `${diff.toFixed(1)}"`;
  };

  const progressStats = [
    {
      title: "Height Growth",
      value:
        measurements.length > 0
          ? formatHeight(measurements[0].height_inches)
          : "N/A",
      period: "Latest",
      trend: "up",
      color: colors.success,
    },
    {
      title: "Monthly Change",
      value:
        measurements.length > 1
          ? calculateChange(
              measurements[0].height_inches,
              measurements[measurements.length - 1].height_inches,
            )
          : "N/A",
      period: "This period",
      trend: "up",
      color: colors.accent,
    },
    {
      title: "Total Logs",
      value: `${measurements.length}`,
      period: "All time",
      trend: "up",
      color: colors.warning,
    },
  ];

  const recentMeasurements = measurements.map((measurement, index) => ({
    date: formatDate(measurement.measurement_date),
    height: formatHeight(measurement.height_inches),
    change:
      index < measurements.length - 1
        ? calculateChange(
            measurement.height_inches,
            measurements[index + 1].height_inches,
          )
        : "baseline",
  }));

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
            Progress
          </Text>
          <Text
            style={{
              fontFamily: "RobotoCondensed_400Regular",
              fontSize: 16,
              color: colors.textSecondary,
              marginTop: 4,
            }}
          >
            Track your growth journey
          </Text>
        </View>

        {/* Progress Overview */}
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
            Overview
          </Text>

          <View style={{ gap: 16 }}>
            {progressStats.map((stat, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: colors.surface,
                  borderRadius: 12,
                  padding: 16,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontFamily: "RobotoCondensed_400Regular",
                      fontSize: 14,
                      color: colors.textSecondary,
                    }}
                  >
                    {stat.title}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "RobotoCondensed_700Bold",
                      fontSize: 24,
                      color: colors.textPrimary,
                      marginTop: 2,
                    }}
                  >
                    {stat.value}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "RobotoCondensed_400Regular",
                      fontSize: 12,
                      color: colors.textSecondary,
                      marginTop: 2,
                    }}
                  >
                    {stat.period}
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: stat.color + "20",
                    borderRadius: 8,
                    padding: 8,
                  }}
                >
                  <TrendingUp size={20} color={stat.color} />
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Height Chart Placeholder */}
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
              Height Chart
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <BarChart3 size={16} color={colors.textSecondary} />
              <Text
                style={{
                  fontFamily: "RobotoCondensed_400Regular",
                  fontSize: 14,
                  color: colors.textSecondary,
                }}
              >
                View Chart
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: colors.surface,
              borderRadius: 12,
              padding: 20,
              height: 200,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BarChart3 size={48} color={colors.textSecondary} />
            <Text
              style={{
                fontFamily: "RobotoCondensed_700Bold",
                fontSize: 16,
                color: colors.textPrimary,
                marginTop: 12,
              }}
            >
              Height Progress Chart
            </Text>
            <Text
              style={{
                fontFamily: "RobotoCondensed_400Regular",
                fontSize: 14,
                color: colors.textSecondary,
                textAlign: "center",
                marginTop: 4,
              }}
            >
              Track your growth over time
            </Text>
          </View>
        </View>

        {/* Recent Measurements */}
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
              Recent Measurements
            </Text>
            <TouchableOpacity
              onPress={() => setShowHeightInput(!showHeightInput)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
                backgroundColor: colors.accent,
                borderRadius: 16,
                paddingHorizontal: 12,
                paddingVertical: 6,
              }}
            >
              <Plus size={16} color={colors.surfaceElevated} />
              <Text
                style={{
                  fontFamily: "RobotoCondensed_700Bold",
                  fontSize: 12,
                  color: colors.surfaceElevated,
                }}
              >
                ADD
              </Text>
            </TouchableOpacity>
          </View>

          {/* Height Input */}
          {showHeightInput && (
            <View
              style={{
                backgroundColor: colors.surface,
                borderRadius: 12,
                padding: 16,
                marginBottom: 16,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <Ruler size={20} color={colors.textSecondary} />
                <TextInput
                  style={{
                    flex: 1,
                    fontFamily: "RobotoCondensed_400Regular",
                    fontSize: 16,
                    color: colors.textPrimary,
                    borderBottomWidth: 1,
                    borderBottomColor: colors.border,
                    paddingVertical: 8,
                  }}
                  placeholder="Enter height (e.g., 5'8.5 inches)"
                  placeholderTextColor={colors.textSecondary}
                  value={heightValue}
                  onChangeText={setHeightValue}
                />
                <TouchableOpacity
                  onPress={handleAddHeight}
                  disabled={saving}
                  style={{
                    backgroundColor: saving
                      ? colors.textSecondary
                      : colors.accent,
                    borderRadius: 8,
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RobotoCondensed_700Bold",
                      fontSize: 14,
                      color: colors.surfaceElevated,
                    }}
                  >
                    {saving ? "Saving..." : "Save"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {loading ? (
            <View style={{ alignItems: "center", paddingVertical: 20 }}>
              <Text
                style={{
                  fontFamily: "RobotoCondensed_400Regular",
                  fontSize: 16,
                  color: colors.textSecondary,
                }}
              >
                Loading measurements...
              </Text>
            </View>
          ) : (
            <View style={{ gap: 12 }}>
              {recentMeasurements.map((measurement, index) => (
                <View
                  key={index}
                  style={{
                    backgroundColor: colors.surface,
                    borderRadius: 12,
                    padding: 16,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontFamily: "RobotoCondensed_700Bold",
                        fontSize: 16,
                        color: colors.textPrimary,
                      }}
                    >
                      {measurement.height}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "RobotoCondensed_400Regular",
                        fontSize: 14,
                        color: colors.textSecondary,
                        marginTop: 2,
                      }}
                    >
                      {measurement.date}
                    </Text>
                  </View>

                  <View
                    style={{
                      backgroundColor:
                        measurement.change === "baseline"
                          ? colors.borderLight
                          : colors.success + "20",
                      borderRadius: 8,
                      paddingHorizontal: 8,
                      paddingVertical: 4,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "RobotoCondensed_700Bold",
                        fontSize: 12,
                        color:
                          measurement.change === "baseline"
                            ? colors.textSecondary
                            : colors.success,
                      }}
                    >
                      {measurement.change}
                    </Text>
                  </View>
                </View>
              ))}

              {recentMeasurements.length === 0 && (
                <View style={{ alignItems: "center", paddingVertical: 20 }}>
                  <Text
                    style={{
                      fontFamily: "RobotoCondensed_400Regular",
                      fontSize: 16,
                      color: colors.textSecondary,
                    }}
                  >
                    No measurements yet. Add your first measurement!
                  </Text>
                </View>
              )}
            </View>
          )}
        </View>

        {/* Posture Photos */}
        <View
          style={{
            paddingHorizontal: 24,
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
              Posture Photos
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Camera size={16} color={colors.textSecondary} />
              <Text
                style={{
                  fontFamily: "RobotoCondensed_400Regular",
                  fontSize: 14,
                  color: colors.textSecondary,
                }}
              >
                Take Photo
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: colors.surface,
              borderRadius: 12,
              padding: 20,
              height: 150,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Camera size={48} color={colors.textSecondary} />
            <Text
              style={{
                fontFamily: "RobotoCondensed_700Bold",
                fontSize: 16,
                color: colors.textPrimary,
                marginTop: 12,
              }}
            >
              Track Your Posture
            </Text>
            <Text
              style={{
                fontFamily: "RobotoCondensed_400Regular",
                fontSize: 14,
                color: colors.textSecondary,
                textAlign: "center",
                marginTop: 4,
              }}
            >
              Take weekly photos to see improvement
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
