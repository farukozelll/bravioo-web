'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  enableSystem?: boolean;
  storageKey?: string;
}

export function EnhancedThemeProvider({
  children,
  defaultTheme = 'system',
  enableSystem = true,
  storageKey = 'theme'
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light');
  const [mounted, setMounted] = useState(false);

  // Get system preference
  const getSystemTheme = useCallback((): ResolvedTheme => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }, []);

  // Resolve actual theme based on preference
  const resolveTheme = useCallback((themePreference: Theme): ResolvedTheme => {
    if (themePreference === 'system') {
      return getSystemTheme();
    }
    return themePreference as ResolvedTheme;
  }, [getSystemTheme]);

  // Apply theme to DOM
  const applyTheme = useCallback((newTheme: ResolvedTheme) => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(newTheme);
    
    // Also set as data attribute for additional CSS targeting
    root.setAttribute('data-theme', newTheme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', newTheme === 'dark' ? '#111827' : '#3A9355');
    }
  }, []);

  // Initialize theme
  useEffect(() => {
    try {
      // Get saved theme or use default
      const savedTheme = localStorage.getItem(storageKey) as Theme | null;
      const initialTheme = savedTheme || defaultTheme;
      
      setThemeState(initialTheme);
      
      const resolved = resolveTheme(initialTheme);
      setResolvedTheme(resolved);
      applyTheme(resolved);
      
      setMounted(true);
    } catch (error) {
      console.warn('Failed to initialize theme:', error);
      // Fallback to light theme
      setResolvedTheme('light');
      applyTheme('light');
      setMounted(true);
    }
  }, [defaultTheme, storageKey, resolveTheme, applyTheme]);

  // Listen to system changes
  useEffect(() => {
    if (!enableSystem) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        const newResolvedTheme = getSystemTheme();
        setResolvedTheme(newResolvedTheme);
        applyTheme(newResolvedTheme);
      }
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [theme, enableSystem, getSystemTheme, applyTheme]);

  // Update theme
  const setTheme = useCallback((newTheme: Theme) => {
    try {
      setThemeState(newTheme);
      localStorage.setItem(storageKey, newTheme);
      
      const resolved = resolveTheme(newTheme);
      setResolvedTheme(resolved);
      
      if (mounted) {
        applyTheme(resolved);
      }
    } catch (error) {
      console.error('Failed to set theme:', error);
    }
  }, [mounted, storageKey, resolveTheme, applyTheme]);

  // Toggle between light and dark (skips system)
  const toggleTheme = useCallback(() => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('light');
    } else {
      // If system, toggle to opposite of current resolved theme
      setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    }
  }, [theme, resolvedTheme, setTheme]);

  const value = {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
    mounted
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useEnhancedTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useEnhancedTheme must be used within an EnhancedThemeProvider');
  }
  return context;
}

// Utility hook for components that only need to know the resolved theme
export function useResolvedTheme(): ResolvedTheme {
  const { resolvedTheme } = useEnhancedTheme();
  return resolvedTheme;
}

// Utility hook that returns true when mounted (useful for SSR)
export function useThemeMounted(): boolean {
  const { mounted } = useEnhancedTheme();
  return mounted;
}
