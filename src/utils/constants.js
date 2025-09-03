// Onboarding Steps Configuration
export const ONBOARDING_STEPS = [
  { id: 1, name: 'height', title: "What's your current height?", required: true },
  { id: 2, name: 'age', title: "How old are you?", required: true },
  { id: 3, name: 'gender', title: "Select your gender", required: true },
  { id: 4, name: 'parents_height', title: "What are your parents' heights?", required: false },
  { id: 5, name: 'dream_height', title: "What's your dream height?", required: true },
  { id: 6, name: 'motivation', title: "What's your motivation?", required: false },
  { id: 7, name: 'barriers', title: "What are your main barriers?", required: true },
  { id: 8, name: 'promo_code', title: "Have a referral code?", required: false },
  { id: 9, name: 'ai_prediction', title: "See your potential height", required: false },
  { id: 10, name: 'growth_blockers', title: "We found 3 issues holding you back", required: false },
  { id: 11, name: 'notifications', title: "Stay on track with reminders", required: false },
  { id: 12, name: 'account', title: "Create your account", required: true },
  { id: 13, name: 'paywall', title: "Your Personalized Growth Plan is Ready", required: false },
  { id: 14, name: 'completion', title: "Welcome to PeakHeight!", required: false }
];

// Motivation Options
export const MOTIVATIONS = [
  {
    value: 'confidence',
    label: 'Confidence',
    icon: 'star',
    description: 'Feel more confident in social and professional situations'
  },
  {
    value: 'posture',
    label: 'Posture',
    icon: 'user-check',
    description: 'Improve your posture and overall body alignment'
  },
  {
    value: 'dating',
    label: 'Dating',
    icon: 'heart',
    description: 'Feel more attractive and confident in dating'
  },
  {
    value: 'sports',
    label: 'Sports',
    icon: 'activity',
    description: 'Gain advantages in sports and physical activities'
  },
  {
    value: 'career',
    label: 'Career',
    icon: 'briefcase',
    description: 'Professional presence and career advancement'
  },
  {
    value: 'health',
    label: 'Health',
    icon: 'heart',
    description: 'Overall health and wellness improvement'
  },
  {
    value: 'other',
    label: 'Other',
    icon: 'more-horizontal',
    description: 'Other personal reasons'
  }
];

// Barriers/Challenges Options
export const BARRIERS = [
  {
    value: 'sleep',
    label: 'Sleep',
    icon: 'moon',
    description: 'Poor sleep quality or insufficient sleep hours'
  },
  {
    value: 'nutrition',
    label: 'Nutrition',
    icon: 'apple',
    description: 'Poor diet and nutritional deficiencies'
  },
  {
    value: 'genetics',
    label: 'Genetics',
    icon: 'dna',
    description: 'Family history and genetic factors'
  },
  {
    value: 'posture',
    label: 'Posture',
    icon: 'user-x',
    description: 'Poor posture and spinal alignment'
  },
  {
    value: 'exercise',
    label: 'Exercise',
    icon: 'dumbbell',
    description: 'Lack of proper exercise and stretching'
  },
  {
    value: 'stress',
    label: 'Stress',
    icon: 'brain',
    description: 'High stress levels affecting growth hormone'
  },
  {
    value: 'age',
    label: 'Age',
    icon: 'clock',
    description: 'Concerns about being too old for growth'
  },
  {
    value: 'time',
    label: 'Time',
    icon: 'calendar',
    description: 'Lack of time for consistent habits'
  },
  {
    value: 'motivation',
    label: 'Motivation',
    icon: 'battery',
    description: 'Difficulty staying motivated and consistent'
  },
  {
    value: 'other',
    label: 'Other',
    icon: 'more-horizontal',
    description: 'Other personal challenges'
  }
];

// Gender Options
export const GENDER_OPTIONS = [
  {
    value: 'male',
    label: 'Male',
    icon: 'user'
  },
  {
    value: 'female',
    label: 'Female',
    icon: 'user'
  },
  {
    value: 'other',
    label: 'Other',
    icon: 'user'
  }
];

// Height Units
export const HEIGHT_UNITS = {
  FEET_INCHES: 'ft',
  CENTIMETERS: 'cm'
};

// Default Values
export const DEFAULT_VALUES = {
  HEIGHT_CM: 170,
  HEIGHT_FT: { feet: 5, inches: 8 },
  AGE: 20,
  BIRTH_YEAR: 2004,
  DREAM_HEIGHT_CM: 185,
  GROWTH_SCORE: 75,
  STREAK_DAYS: 0
};

// App Configuration
export const APP_CONFIG = {
  NAME: 'PeakHeight',
  TAGLINE: 'Unlock Your Full Height Potential',
  VERSION: '1.0.0',
  SUPPORT_EMAIL: 'support@peakheight.com',
  PRIVACY_URL: '/privacy',
  TERMS_URL: '/terms'
};

// Subscription Plans
export const SUBSCRIPTION_PLANS = {
  FREE: {
    id: 'free',
    name: 'Free',
    price: 0,
    period: 'forever',
    features: [
      'Basic height tracking',
      'Daily tips',
      'Simple progress charts'
    ]
  },
  MONTHLY: {
    id: 'monthly',
    name: 'Monthly',
    price: 9.99,
    period: 'month',
    currency: '$',
    popular: false,
    features: [
      'AI Prediction',
      'Daily Plan',
      'Advanced Analytics',
      'Full Content Library',
      'Community Access',
      'AI Coach Support',
      'Ad-Free Experience'
    ]
  },
  ANNUAL: {
    id: 'annual',
    name: 'Annual',
    price: 29.99,
    originalPrice: 119.88,
    period: 'year',
    currency: '$',
    popular: true,
    savings: 70,
    features: [
      'All Monthly features',
      'Priority AI Support',
      'Advanced Analytics',
      'Exclusive Content',
      'Early Access to Features'
    ]
  }
};

// Habit Types
export const HABIT_TYPES = {
  SLEEP: {
    id: 'sleep',
    name: 'Sleep',
    icon: 'moon',
    color: '#6366f1',
    target: { value: 8, unit: 'hours' },
    description: 'Quality sleep for growth hormone production'
  },
  POSTURE: {
    id: 'posture',
    name: 'Posture',
    icon: 'user-check',
    color: '#10b981',
    target: { value: 100, unit: '%' },
    description: 'Maintain proper posture throughout the day'
  },
  STRETCHING: {
    id: 'stretch',
    name: 'Stretching',
    icon: 'activity',
    color: '#f59e0b',
    target: { value: 15, unit: 'minutes' },
    description: 'Daily stretching for spinal health'
  },
  HYDRATION: {
    id: 'water',
    name: 'Hydration',
    icon: 'droplet',
    color: '#06b6d4',
    target: { value: 8, unit: 'glasses' },
    description: 'Stay hydrated for optimal body function'
  },
  NUTRITION: {
    id: 'nutrition',
    name: 'Nutrition',
    icon: 'apple',
    color: '#ef4444',
    target: { value: 3, unit: 'meals' },
    description: 'Balanced nutrition for growth and health'
  }
};

// Typography - Authority Fonts with Tight Spacing
export const TYPOGRAPHY = {
  FONTS: {
    UI: 'SF Pro Display', // Fallback to Inter on Android
    UI_FALLBACK: 'Inter',
    HEADLINES: 'Playfair Display',
    HEADLINES_FALLBACK: 'STIX Two Text'
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
  },
  SPACING: {
    HEADLINE: -0.5, // Tight letter-spacing for headlines
    BODY: 0.2 // Slight increase for body text
  },
  LINE_HEIGHT: {
    HEADLINE: 1.2,
    BODY: 1.6 // Increased line height for body
  }
};

// Colors - Deep Navy Base with Cobalt Accent
export const COLORS = {
  PRIMARY: '#1e3a8a', // Deep Navy
  ACCENT: '#3b82f6', // Cobalt
  CYAN: '#0891b2', // Subtle Cyan for states
  SUCCESS: '#059669',
  WARNING: '#d97706',
  DANGER: '#dc2626',
  BACKGROUND: '#0f172a', // Darker navy background
  SURFACE: '#1e293b', // Navy surface
  SURFACE_ELEVATED: '#334155', // Elevated surface
  TEXT_PRIMARY: '#f8fafc',
  TEXT_SECONDARY: '#94a3b8',
  TEXT_DISABLED: '#64748b',
  BORDER: '#e2e8f0', // Platinum gray
  DIVIDER: '#cbd5e1', // Lighter platinum
  SHADOW: 'rgba(0, 0, 0, 0.1)'
};

// Daily Tips
export const DAILY_TIPS = [
  "Sleeping before 10PM increases growth hormone production by 34%",
  "Proper posture can instantly make you appear 2 inches taller",
  "Stretching for 15 minutes daily improves spinal alignment",
  "Adequate protein intake supports bone and muscle growth",
  "Deep breathing exercises help decompress the spine",
  "Swimming is one of the best exercises for height growth",
  "Calcium and Vitamin D are essential for bone development",
  "Hanging exercises can help lengthen the spine",
  "Avoiding stress helps maintain optimal growth hormone levels",
  "Consistent sleep schedule is more important than total hours",
  "Yoga poses like mountain pose improve posture significantly",
  "Proper hydration keeps spinal discs healthy and flexible"
];

// Growth Blockers (for teaser)
export const GROWTH_BLOCKERS = [
  {
    id: 'sleep_quality',
    title: 'Sleep Quality Issues',
    description: 'Your sleep schedule is affecting growth hormone production',
    severity: 'high',
    icon: 'moon'
  },
  {
    id: 'posture_problems',
    title: 'Posture Improvement Needed',
    description: 'Poor posture is compressing your spine by up to 1.5 inches',
    severity: 'medium',
    icon: 'user-x'
  },
  {
    id: 'nutrition_gaps',
    title: 'Nutritional Habits Suboptimal',
    description: 'Key nutrients for growth are missing from your diet',
    severity: 'medium',
    icon: 'apple'
  }
];

// Design Tokens
export const DESIGN_TOKENS = {
  SPACING: {
    XS: 4,
    SM: 8,
    MD: 16,
    LG: 24,
    XL: 32,
    XXL: 48
  },
  ELEVATION: {
    LEVEL_0: 0,
    LEVEL_1: 1
  },
  BORDER_RADIUS: {
    SM: 4,
    MD: 8,
    LG: 12,
    XL: 16
  },
  BORDER_WIDTH: {
    THIN: 1,
    MEDIUM: 2
  },
  ANIMATION: {
    FAST: 120,
    NORMAL: 160,
    SLOW: 300
  }
};

export default {
  ONBOARDING_STEPS,
  MOTIVATIONS,
  BARRIERS,
  GENDER_OPTIONS,
  HEIGHT_UNITS,
  DEFAULT_VALUES,
  APP_CONFIG,
  SUBSCRIPTION_PLANS,
  HABIT_TYPES,
  COLORS,
  TYPOGRAPHY,
  DESIGN_TOKENS,
  DAILY_TIPS,
  GROWTH_BLOCKERS
};
