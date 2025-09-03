import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated
} from 'react-native';
import { COLORS } from '../../utils/constants';

export default function ProgressBar({
  progress = 0, // 0-100
  height = 8,
  backgroundColor = COLORS.BORDER,
  progressColor = COLORS.PRIMARY,
  showPercentage = false,
  style,
  animated = true
}) {
  const progressAnim = new Animated.Value(progress);

  React.useEffect(() => {
    if (animated) {
      Animated.timing(progressAnim, {
        toValue: progress,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [progress, animated]);

  return (
    <View style={[styles.container, style]}>
      <View 
        style={[
          styles.progressBar,
          { 
            height,
            backgroundColor 
          }
        ]}
      >
        <Animated.View
          style={[
            styles.progressFill,
            {
              height,
              backgroundColor: progressColor,
              width: animated 
                ? progressAnim.interpolate({
                    inputRange: [0, 100],
                    outputRange: ['0%', '100%'],
                    extrapolate: 'clamp',
                  })
                : `${Math.max(0, Math.min(100, progress))}%`
            }
          ]}
        />
      </View>
      {showPercentage && (
        <Text style={styles.percentage}>
          {Math.round(progress)}%
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  progressBar: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    borderRadius: 4,
  },
  percentage: {
    fontSize: 12,
    color: COLORS.TEXT_SECONDARY,
    textAlign: 'right',
    marginTop: 4,
  },
});