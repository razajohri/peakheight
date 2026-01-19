# PeakHeight App - Complete Memory Documentation

## 📱 App Overview

**PeakHeight** is a React Native mobile application built with Expo that helps users track and improve their height through personalized growth plans, exercises, nutrition guidance, and AI-powered coaching.

### Core Purpose
- Height tracking and growth prediction
- Personalized daily exercise and nutrition plans
- AI-powered coaching and guidance
- Community features (Tribe)
- Progress tracking and analytics

---

## 🛠 Tech Stack

### Framework & Core
- **React Native**: 0.81.4
- **React**: 19.1.0
- **Expo**: ~54.0.7
- **Expo Dev Client**: For custom native builds

### Key Dependencies
- **@react-native-community/datetimepicker**: Date selection
- **@react-native-community/slider**: Range inputs
- **@supabase/supabase-js**: Backend/database
- **expo-apple-authentication**: Apple Sign In
- **expo-haptics**: Tactile feedback
- **expo-linear-gradient**: Gradient backgrounds
- **react-native-reanimated**: Advanced animations
- **react-native-purchases**: RevenueCat for subscriptions
- **react-native-safe-area-context**: Safe area handling
- **@sentry/react-native**: Error tracking

### UI Libraries
- **@expo/vector-icons**: Ionicons, FontAwesome, MaterialIcons
- **lucide-react-native**: Additional icons
- **react-native-svg**: SVG support

---

## 📁 Project Structure

```
PeakHeightApp/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── onboarding/      # Onboarding-specific components
│   │   ├── UI/              # General UI components
│   │   ├── AI/              # AI Coach components
│   │   └── Nutrition/       # Nutrition-related components
│   ├── screens/             # Screen components
│   │   ├── onboarding/     # Onboarding flow screens
│   │   └── [Main screens]   # Home, Exercises, Tribe, etc.
│   ├── services/            # Business logic & API services
│   ├── contexts/            # React Context providers
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions & constants
│   ├── config/              # Configuration files
│   └── data/                 # Static data
├── App.js                   # Root component
└── package.json
```

---

## 🎨 Design System

### Onboarding Design (Black/White Theme)

#### Colors (`onboardingConstants.js`)
```javascript
ONBOARDING_COLORS = {
  BACKGROUND: '#000000',
  SURFACE: '#0a0a0a',
  SURFACE_ELEVATED: '#1f1f1f',
  TEXT_PRIMARY: '#FFFFFF',
  TEXT_SECONDARY: '#9CA3AF',
  BORDER: '#1f1f1f',
  BORDER_SELECTED: '#FFFFFF',
  BUTTON_BACKGROUND: '#FFFFFF',
  PROGRESS_BAR: '#1f1f1f',
  PROGRESS_FILL: '#FFFFFF',
}
```

#### Typography (`onboardingConstants.js`)
```javascript
ONBOARDING_TYPOGRAPHY = {
  PAGE_TITLE: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    lineHeight: 40,
    letterSpacing: -0.5,
    color: '#FFFFFF',
  },
  SUBTITLE: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    lineHeight: 24,
    color: '#9CA3AF',
  },
  OPTION_TEXT: {
    fontSize: 18,
    fontFamily: 'Inter-Medium',
    lineHeight: 24,
    color: '#FFFFFF',
  },
  BUTTON_TEXT: {
    fontSize: 17,
    fontFamily: 'Inter-SemiBold',
    color: '#000000',
  }
}
```

#### Spacing (`onboardingConstants.js`)
```javascript
ONBOARDING_SPACING = {
  XS: 4,
  SM: 8,
  MD: 16,
  LG: 24,
  XL: 32,
  XXL: 48,
  PAGE_HORIZONTAL: 24,
  PAGE_VERTICAL: 16,
  SECTION_GAP: 32,
  CARD_PADDING: 18,
  BUTTON_PADDING_VERTICAL: 16,
  BUTTON_PADDING_HORIZONTAL: 24,
}
```

#### Border Radius (`onboardingConstants.js`)
```javascript
ONBOARDING_BORDER_RADIUS = {
  SM: 8,
  MD: 12,
  LG: 16,
  XL: 24,
  BUTTON: 12,
  CARD: 12,
  BACK_BUTTON: 20,
}
```

### Main App Design (Navy/Cobalt Theme)

#### Colors (`constants.js`)
```javascript
COLORS = {
  PRIMARY: '#1e3a8a',        // Deep Navy
  ACCENT: '#3b82f6',          // Cobalt
  CYAN: '#0891b2',            // Subtle Cyan
  SUCCESS: '#059669',
  WARNING: '#d97706',
  DANGER: '#dc2626',
  BACKGROUND: '#0f172a',      // Darker navy background
  SURFACE: '#1e293b',         // Navy surface
  SURFACE_ELEVATED: '#334155', // Elevated surface
  TEXT_PRIMARY: '#f8fafc',
  TEXT_SECONDARY: '#94a3b8',
  BORDER: '#e2e8f0',          // Platinum gray
}
```

#### Typography (`constants.js`)
```javascript
TYPOGRAPHY = {
  FONTS: {
    UI: 'SF Pro Display',
    UI_FALLBACK: 'Inter',
    HEADLINES: 'Playfair Display',
  },
  SIZES: {
    H1: 32,
    H2: 28,
    H3: 24,
    H4: 20,
    BODY_LARGE: 18,
    BODY: 16,
    BODY_SMALL: 14,
    CAPTION: 12
  },
  WEIGHTS: {
    REGULAR: '400',
    MEDIUM: '500',
    SEMIBOLD: '600',
    BOLD: '700'
  }
}
```

---

## 🔄 App Flow & Navigation

### Main Flow (`App.js`)
1. **Splash Screen** → Custom animated splash
2. **Welcome Screen** → Initial entry point
3. **Onboarding Flow** → 15 steps (excluding testimonial, analysis, preview)
4. **Auth Screen** → Login/Signup (Apple, Email, Facebook)
5. **Paywall Screen** → Subscription options
6. **Main App** → Home, Exercises, Daily Routine, Tribe, Profile

### Screen States (`App.js`)
```javascript
currentScreen: 'onboarding' | 'auth' | 'paywall' | 'main-app'
```

### Navigation Functions (`App.js`)
- `navigateTo(screen, params)` - Navigate between main screens
- `handleOnboardingComplete(data)` - Complete onboarding
- `handleAuthSuccess(user, onboardingData, isAppleSignIn)` - Auth success
- `handleLogout()` - Logout and reset

---

## 📋 Onboarding Flow

### Total Steps: 15 (excluding testimonial, analysis, preview pages)

#### Onboarding Pages (`CompleteOnboardingFlow.js`)
1. **Onboarding1** - Hero page with "Get Started Now!" swipe button
2. **Onboarding2** - Gender selection
3. **Onboarding3** - Date of birth (with DateTimePicker)
4. **Onboarding4** - Age confirmation
5. **Onboarding5** - Height & Weight input
6. **Onboarding5B** - Additional measurements
7. **Onboarding6** - Parents' height (with info modal)
8. **Onboarding7** - Dream height
9. **Onboarding7A** - "What have you tried?" (6 options)
10. **Onboarding8** - Foot size (US/EU/UK)
11. **Onboarding9** - Additional questions
12. **Onboarding10** - More preferences
13. **Onboarding12** - Additional info
14. **Onboarding13** - Final questions
15. **Onboarding13A** - Completion step

#### Excluded Pages (not counted in progress)
- **Onboarding11** - Sleep page (ignored in flow)
- **Onboarding14** - Testimonial/Rating page
- **Onboarding15** - Analysis page
- **Onboarding17** - Preview page
- **Onboarding18** - Additional page (ignored)

### Onboarding Components

#### `ProgressHeader.js`
- Shows progress indicator (X/15)
- Back button
- Uses `ONBOARDING_TOTAL_STEPS = 15`

#### `OnboardingButton.js`
- Standardized button component
- White background, black text
- Supports different variants
- Haptic feedback on press

#### `OnboardingOptionCard.js`
- Selectable option cards
- Icon support (left/right position)
- Checkmark when selected
- Supports `compact` prop for smaller size
- Haptic feedback

#### `FloatingStars.js`
- Animated background stars
- Used across multiple onboarding pages

### Onboarding Data Structure
```javascript
onboardingData = {
  gender: 'male' | 'female' | 'other',
  dateOfBirth: ISO string,
  age: number,
  height: number,
  weight: number,
  heightUnit: 'ft' | 'cm',
  weightUnit: 'kg' | 'lbs',
  fatherFeet: number,
  fatherInches: number,
  motherFeet: number,
  motherInches: number,
  parentMeasurementSystem: 'imperial' | 'metric',
  dreamHeight: number,
  triedOptions: string[],
  footSize: number,
  footSizeSystem: 'us' | 'eu' | 'uk',
  // ... other fields
}
```

---

## 🔐 Authentication

### Auth Screen (`AuthScreen.js`)

#### Features
- **Apple Sign In** - Native Apple authentication
- **Email/Password** - Custom email auth
- **Facebook Sign In** - Social auth (if enabled)
- **Modal-based email form** - Slide-up modal with form
- **Password strength checker** - Real-time feedback
- **Terms & Privacy modal** - Required for signup

#### Email Form Modal
- Animated slide-up modal (Reanimated)
- Drag-to-close gesture
- KeyboardAvoidingView for keyboard handling
- Form fields:
  - First Name / Last Name (signup only)
  - Email
  - Password (with visibility toggle)
  - Confirm Password (signup only)

#### Auth Flow
1. User selects auth method
2. For email: Modal opens with form
3. For signup: Terms modal appears after form submission
4. Auth service processes authentication
5. On success: Navigate to paywall or main app

#### Auth Service (`services/auth.js`)
- `signUp(email, password, userData)`
- `signIn(email, password)`
- `signInWithApple()`
- `signInWithFacebook()`
- `getUserProfile(userId)`
- `updateUserProfile(userId, data)`

---

## 💳 Subscription & Paywall

### Paywall Screen (`PaywallScreen.js`)
- Subscription plan options
- Monthly vs Annual pricing
- RevenueCat integration
- Premium features showcase

### Subscription Plans (`constants.js`)
```javascript
SUBSCRIPTION_PLANS = {
  MONTHLY: {
    id: 'monthly',
    price: 9.99,
    period: 'month',
    features: [...]
  },
  ANNUAL: {
    id: 'annual',
    price: 29.99,
    originalPrice: 119.88,
    period: 'year',
    savings: 70,
    features: [...]
  }
}
```

### Subscription Service (`services/subscriptionService.js`)
- RevenueCat integration
- Subscription status checking
- Purchase handling

---

## 🏠 Main App Structure

### Main App (`MainApp.js`)

#### Tab Navigation
- **Home** (`home`) - Main dashboard
- **Hub** (`exercises`) - Exercise library
- **Today** (`daily`) - Daily routine & progress
- **Tribe** (`tribe`) - Community features

#### Screens
- `HomeScreen` - Dashboard with stats, progress
- `ExercisesScreen` - Exercise library and plans
- `DailyRoutineScreen` - Daily tasks and habits
- `TribeScreen` - Community/social features
- `PersonalProfileScreen` - User profile & settings

### Home Screen (`HomeScreen.js`)
- User stats display
- Progress tracking
- Quick actions
- Navigation to other screens

### Exercises Screen (`ExercisesScreen.js`)
- Exercise library
- Custom exercise plans
- Exercise categories
- Navigation to exercise details

### Daily Routine Screen (`DailyRoutineScreen.js`)
- Daily habit tracking
- Task completion
- Progress visualization
- Nutrition tracking

### Tribe Screen (`TribeScreen.js`)
- Community feed
- User posts
- Social interactions

---

## 🧩 Key Components

### Onboarding Components

#### `ProgressHeader.js`
```javascript
<ProgressHeader 
  currentStep={number}  // 1-15
  onBack={() => {}}     // Back button handler
/>
```

#### `OnboardingButton.js`
```javascript
<OnboardingButton
  title="Continue"
  onPress={() => {}}
  variant="primary"  // optional
/>
```

#### `OnboardingOptionCard.js`
```javascript
<OnboardingOptionCard
  label="Option Text"
  icon="icon-name"
  iconPosition="right"  // 'left' | 'right'
  selected={boolean}
  onPress={() => {}}
  showCheckmark={boolean}
  compact={boolean}  // Smaller size variant
/>
```

#### `FloatingStars.js`
```javascript
<FloatingStars />
// Animated background component
```

### UI Components

#### `Button.js`
- Standardized button component
- Gradient support
- Haptic feedback
- Loading states

#### `Icon.js`
- Icon wrapper component
- Multiple icon library support

### AI Components

#### `AICoachModal.js`
- AI chat interface
- OpenAI integration
- Conversation history

#### `AICoachIcon.js`
- Floating AI coach button
- Notification badge

---

## 🔧 Services

### Auth Service (`services/auth.js`)
- User authentication
- Profile management
- Social auth integration

### Height Growth Service (`services/heightGrowthService.js`)
- Growth predictions
- Height calculations
- Analytics

### AI Services
- `aiService.js` - General AI functionality
- `aiCoachService.js` - AI coach interactions
- `chatgptService.js` - ChatGPT integration

### Database Service (`services/database.js`)
- Supabase operations
- Data queries
- User data management

### Subscription Service (`services/subscriptionService.js`)
- RevenueCat integration
- Purchase handling
- Subscription status

### Notification Service (`services/notificationService.js`)
- Push notifications
- Reminders
- Scheduling

### Image Upload Service (`services/imageUploadService.js`)
- Profile picture uploads
- Image processing

---

## 🎯 Key Features

### Height Tracking
- Current height input
- Height history
- Growth predictions
- Progress visualization

### Exercise Plans
- Custom exercise routines
- Exercise library
- Daily exercise tracking
- Progress tracking

### Nutrition
- Food scanning
- Nutrition tracking
- Meal planning
- Supplement recommendations

### AI Coach
- Chat interface
- Personalized advice
- Growth tips
- Answer questions

### Community (Tribe)
- User posts
- Social feed
- Interactions
- Sharing

### Daily Routine
- Habit tracking
- Task completion
- Streaks
- Progress metrics

---

## 📱 Platform-Specific Considerations

### iOS
- Apple Sign In native integration
- DateTimePicker uses `spinner` display mode
- Safe area handling
- Haptic feedback

### Android
- DateTimePicker uses `default` display mode (modal)
- Different keyboard behavior
- Safe area handling
- Haptic feedback

### Keyboard Handling
- `KeyboardAvoidingView` used in modals
- `behavior={Platform.OS === 'ios' ? 'padding' : 'height'}`
- ScrollView with `keyboardShouldPersistTaps="handled"`

---

## 🎨 Animation Patterns

### Onboarding Animations
- Page transitions: 300ms
- Content fade: 600ms
- Button press: 100ms
- Progress bar: 500ms

### Reanimated Usage
- Modal animations (EmailFormModal)
- Smooth transitions
- Gesture handling

### Animated API
- Splash screen animations
- Progress indicators
- Button interactions

---

## 🔔 Haptic Feedback

### Usage Pattern
```javascript
import * as Haptics from 'expo-haptics';

// Light feedback for selections
Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

// Or with error handling
try { 
  await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); 
} catch {}
```

### HapticFeedback Utility (`utils/hapticFeedback.js`)
- Standardized haptic patterns
- Selection feedback
- Success/error feedback

---

## 🗄 Data Management

### User Context (`contexts/UserContext.js`)
- Global user state
- Profile data
- Subscription status
- Real-time updates

### AsyncStorage
- Onboarding data persistence
- User preferences
- App state

### Supabase
- User authentication
- Database operations
- Real-time subscriptions
- File storage

---

## 🎯 Important Implementation Details

### Onboarding Progress
- Total steps: **15** (defined in `ONBOARDING_TOTAL_STEPS`)
- Progress shown as "X / 15"
- Excluded pages: Onboarding11, Onboarding14, Onboarding15, Onboarding17, Onboarding18

### Date of Birth Picker
- iOS: Inline spinner picker
- Android: Modal picker
- Fixed duplicate picker issue on iOS

### Keyboard Handling
- EmailFormModal uses KeyboardAvoidingView
- ScrollView with proper content padding
- Platform-specific behavior

### Modal Animations
- EmailFormModal: Slide-up with Reanimated
- Drag-to-close gesture
- Smooth transitions

### Design Consistency
- Onboarding: Black/white theme
- Main app: Navy/cobalt theme
- Separate design constants for each

---

## 📝 Code Patterns

### Component Structure
```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ONBOARDING_COLORS, ONBOARDING_SPACING } from '../../utils/onboardingConstants';

const Component = ({ navigation, data, updateData }) => {
  // State
  // Effects
  // Handlers
  // Render
};
```

### Styling Pattern
```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ONBOARDING_COLORS.BACKGROUND,
  },
  // Use constants for consistency
});
```

### Navigation Pattern
```javascript
// Onboarding navigation
navigation.navigate('OnboardingX');

// Main app navigation
setCurrentTab('home');
```

---

## 🚀 Build & Deployment

### Commands
```bash
npm start          # Start Expo dev server
npm run ios        # Run on iOS
npm run android    # Run on Android
```

### Configuration
- `app.json` - Expo configuration
- `babel.config.js` - Babel configuration
- `metro.config.js` - Metro bundler config

---

## 📚 Additional Resources

### Constants Files
- `src/utils/constants.js` - Main app constants
- `src/utils/onboardingConstants.js` - Onboarding constants

### Configuration Files
- `src/config/supabase.js` - Supabase setup
- `src/config/sentry.js` - Error tracking
- `src/config/apiKeys.js` - API keys

### Utility Files
- `src/utils/hapticFeedback.js` - Haptic patterns
- `src/utils/responsiveUtils.js` - Responsive helpers
- `src/utils/exerciseUtils.js` - Exercise utilities

---

## 🎯 Key Takeaways for Landing Page

1. **Design Theme**: Use black/white for onboarding, navy/cobalt for main app
2. **Typography**: Inter font family, specific sizes and weights
3. **Spacing**: Consistent spacing system (XS, SM, MD, LG, XL, XXL)
4. **Components**: Reusable components with consistent props
5. **Animations**: Smooth transitions, haptic feedback
6. **Platform**: Handle iOS/Android differences
7. **Navigation**: Clear flow from onboarding → auth → paywall → main app
8. **Data Flow**: Onboarding data → Auth → Profile update → Main app

---

**Last Updated**: Based on current codebase state
**Version**: 1.0.0
**Framework**: React Native with Expo
