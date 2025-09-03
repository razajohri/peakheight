import { useMemo } from 'react';

export function useTheme() {
  const colors = useMemo(() => ({
    // Background colors
    background: '#1a1a1a',
    surface: '#1e293b',
    surfaceElevated: '#334155',

    // Text colors
    textPrimary: '#ffffff',
    textSecondary: '#9ca3af',
    textDisabled: '#6b7280',

    // Accent colors
    accent: '#3b82f6',
    accentLight: '#60a5fa',

    // Status colors
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',

    // Feature-specific colors
    heightGreen: '#10b981',
    postureBlue: '#3b82f6',
    habitPurple: '#8b5cf6',

    // Border colors
    border: '#374151',
    borderLight: '#4b5563',

    // Chart colors
    chartLine: '#3b82f6',
    chartArea: 'rgba(59, 130, 246, 0.1)',
  }), []);

  return { colors };
}
