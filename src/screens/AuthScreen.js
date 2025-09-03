import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';

import Button from '../components/UI/Button';
// import { AuthService } from '../services/auth';
import { COLORS, APP_CONFIG } from '../utils/constants';

export default function AuthScreen({ onSuccess, onBack }) {
  const [mode, setMode] = useState('signin'); // 'signin' or 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // const authService = new AuthService();

  const handleEmailAuth = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (mode === 'signup' && password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      // For demo purposes, simulate authentication
      setTimeout(() => {
        const mockUser = { 
          id: '123', 
          email: email,
          created_at: new Date().toISOString()
        };
        onSuccess(mockUser);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Auth error:', error);
      Alert.alert(
        'Authentication Failed',
        error.message || 'Please check your credentials and try again.'
      );
      setLoading(false);
    }
  };

  const handleSocialAuth = async (provider) => {
    setLoading(true);
    try {
      // For demo purposes, simulate social authentication
      setTimeout(() => {
        const mockUser = { 
          id: '123', 
          email: `user@${provider}.com`,
          created_at: new Date().toISOString(),
          provider: provider
        };
        onSuccess(mockUser);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Social auth error:', error);
      Alert.alert(
        'Authentication Failed',
        'Please try again or use email authentication.'
      );
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert('Email Required', 'Please enter your email address first');
      return;
    }

    // For demo purposes, simulate password reset
    Alert.alert(
      'Password Reset',
      'Check your email for password reset instructions'
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.logo}>{APP_CONFIG.NAME}</Text>
          <Text style={styles.title}>
            {mode === 'signin' ? 'Welcome back!' : 'Create your account'}
          </Text>
          <Text style={styles.subtitle}>
            {mode === 'signin' 
              ? 'Sign in to continue your height journey'
              : 'Join thousands achieving their height goals'
            }
          </Text>
        </View>

        <View style={styles.authForm}>
          {/* Social Auth Buttons */}
          <View style={styles.socialButtons}>
            <Button
              title="Continue with Google"
              onPress={() => handleSocialAuth('google')}
              style={[styles.socialButton, styles.googleButton]}
              textStyle={styles.socialButtonText}
              loading={loading}
            />
            <Button
              title="Continue with Apple"
              onPress={() => handleSocialAuth('apple')}
              style={[styles.socialButton, styles.appleButton]}
              textStyle={styles.socialButtonText}
              loading={loading}
            />
            <Button
              title="Continue with Facebook"
              onPress={() => handleSocialAuth('facebook')}
              style={[styles.socialButton, styles.facebookButton]}
              textStyle={styles.socialButtonText}
              loading={loading}
            />
          </View>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Email Auth Form */}
          <View style={styles.emailForm}>
            <TextInput
              style={styles.input}
              placeholder="Email address"
              placeholderTextColor={COLORS.TEXT_SECONDARY}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={COLORS.TEXT_SECONDARY}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
            />

            {mode === 'signup' && (
              <TextInput
                style={styles.input}
                placeholder="Confirm password"
                placeholderTextColor={COLORS.TEXT_SECONDARY}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                autoCapitalize="none"
              />
            )}

            {mode === 'signin' && (
              <TouchableOpacity
                style={styles.forgotPassword}
                onPress={handleForgotPassword}
              >
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </TouchableOpacity>
            )}

            <Button
              title={mode === 'signin' ? 'Sign In' : 'Create Account'}
              onPress={handleEmailAuth}
              style={styles.emailAuthButton}
              loading={loading}
            />
          </View>

          {/* Mode Toggle */}
          <View style={styles.modeToggle}>
            <Text style={styles.modeToggleText}>
              {mode === 'signin' 
                ? "Don't have an account? " 
                : "Already have an account? "
              }
            </Text>
            <TouchableOpacity
              onPress={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
            >
              <Text style={styles.modeToggleLink}>
                {mode === 'signin' ? 'Sign up' : 'Sign in'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Terms */}
          <Text style={styles.terms}>
            By continuing, you agree to our{' '}
            <Text style={styles.termsLink}>Terms of Service</Text>
            {' '}and{' '}
            <Text style={styles.termsLink}>Privacy Policy</Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.SURFACE,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 18,
    color: COLORS.TEXT_PRIMARY,
    fontWeight: 'bold',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
    textAlign: 'center',
    lineHeight: 24,
  },
  authForm: {
    flex: 1,
  },
  socialButtons: {
    marginBottom: 30,
    gap: 12,
  },
  socialButton: {
    borderRadius: 12,
    height: 52,
  },
  googleButton: {
    backgroundColor: '#4285f4',
  },
  appleButton: {
    backgroundColor: '#000',
  },
  facebookButton: {
    backgroundColor: '#1877f2',
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.BORDER,
  },
  dividerText: {
    paddingHorizontal: 16,
    fontSize: 14,
    color: COLORS.TEXT_SECONDARY,
  },
  emailForm: {
    marginBottom: 30,
  },
  input: {
    backgroundColor: COLORS.SURFACE,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: COLORS.TEXT_PRIMARY,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    marginBottom: 16,
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: COLORS.PRIMARY,
  },
  emailAuthButton: {
    borderRadius: 12,
    height: 52,
  },
  modeToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  modeToggleText: {
    fontSize: 14,
    color: COLORS.TEXT_SECONDARY,
  },
  modeToggleLink: {
    fontSize: 14,
    color: COLORS.PRIMARY,
    fontWeight: '600',
  },
  terms: {
    fontSize: 12,
    color: COLORS.TEXT_SECONDARY,
    textAlign: 'center',
    lineHeight: 18,
  },
  termsLink: {
    color: COLORS.PRIMARY,
  },
});