import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  StatusBar
} from 'react-native';

const SplashScreen = () => {
  // Animation values
  const fadeAnim = new Animated.Value(0);
  const loadingWidth = new Animated.Value(0);

  useEffect(() => {
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Loading bar animation
    Animated.timing(loadingWidth, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      <Animated.View
        style={[
          styles.contentContainer,
          { opacity: fadeAnim }
        ]}
      >
        {/* Logo */}
        <Image
          source={require('../../assets/peakheight-logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* App Name */}
        <Text style={styles.appName}>PeakHeight</Text>

        {/* Tagline */}
        <Text style={styles.tagline}>Height and posture program</Text>
      </Animated.View>

      {/* Loading indicator */}
      <View style={styles.loadingBarContainer}>
        <Animated.View
          style={[
            styles.loadingBar,
            { width: loadingWidth.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%']
            }) }
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark charcoal/black background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contentContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
  appName: {
    fontFamily: 'Inter-Bold', // Using Inter font as specified
    fontSize: 28,
    color: 'white',
    marginBottom: 8,
  },
  tagline: {
    fontFamily: 'Inter-Regular', // Using Inter font as specified
    fontSize: 16,
    color: '#E0E0E0', // Slightly dimmed white
    marginBottom: 60,
  },
  loadingBarContainer: {
    position: 'absolute',
    bottom: 60,
    width: '60%',
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  loadingBar: {
    height: '100%',
    backgroundColor: '#0052CC', // Cobalt blue accent
  },
});

export default SplashScreen;
