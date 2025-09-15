# Responsive Layout Implementation Guide

## Overview
This guide shows how to use the new responsive components that have been implemented with modern best practices, dark mode support, and mobile-first design.

## 1. Using the New Responsive Header

Replace the old header with the new responsive one:

```tsx
// Instead of:
import { Header } from '@/components/header';

// Use:
import { ResponsiveHeader } from '@/components/responsive-header';

// In your layout or page:
<ResponsiveHeader />
```

### Features:
- ✅ **Mobile-First Design**: Properly sized for all devices
- ✅ **Drawer Menu**: Smooth slide-out navigation for mobile
- ✅ **Dark Mode Support**: Automatic theme adaptation
- ✅ **Announcement Bar Integration**: Fixed positioning when closed
- ✅ **Accessibility**: Proper ARIA labels and keyboard navigation

## 2. Enhanced Footer with Dark Mode

The footer now supports:

```tsx
// Automatic dark mode support
<Footer />
```

### Features:
- ✅ **3-Column Layout**: Logo/description/social on left, links on right
- ✅ **Dark Mode Toggle**: Built-in theme switcher
- ✅ **Responsive Grid**: Adapts from 1 column (mobile) to 3 columns (desktop)
- ✅ **Centralized Configuration**: All links managed in `config/footer.ts`

## 3. Dark Mode Implementation

### ThemeProvider Setup:
```tsx
// Already integrated in app/layout.tsx
import { ThemeProvider } from '@/contexts/theme-context';

<ThemeProvider>
  {children}
</ThemeProvider>
```

### Using Theme in Components:
```tsx
import { useTheme } from '@/contexts/theme-context';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <button onClick={toggleTheme}>
        Toggle to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </div>
  );
}
```

## 4. Customer Gallery with Background Images

The gallery now features:

```tsx
<CustomerGallery />
```

### Features:
- ✅ **Professional Background Images**: Unsplash corporate photos
- ✅ **Clean Logo-Only Design**: Removed text clutter
- ✅ **Category-Based Gradients**: Visual categorization
- ✅ **Hover Effects**: Smooth image scaling

## 5. Responsive Live Support

The live support is now mobile-friendly:

```tsx
<LiveSupport />
```

### Features:
- ✅ **Smart Positioning**: Right side on mobile, left on desktop
- ✅ **Responsive Dialog**: Proper sizing on all devices
- ✅ **Touch-Friendly**: Optimized button sizes for mobile

## 6. Configuration Management

### Footer Links Configuration:
```tsx
// config/footer.ts
export const footerSections: FooterSection[] = [
  {
    titleKey: 'footer.sections.product.title',
    iconKey: 'P',
    color: 'bg-brand-500',
    links: [
      { nameKey: 'footer.sections.product.features', href: '/#features' },
      // ... more links
    ]
  }
];
```

### Adding New Social Links:
```tsx
// config/footer.ts
export const socialLinks: SocialLink[] = [
  { 
    nameKey: 'footer.social.linkedin', 
    href: 'https://linkedin.com/company/bravioo', 
    icon: Linkedin,
    external: true 
  },
  // Add new platforms here
];
```

## 7. Internationalization Support

All components use proper i18n:

```json
// messages/tr.json
{
  "footer": {
    "theme": {
      "title": "Tema",
      "light": "Açık Tema",
      "dark": "Koyu Tema"
    }
  }
}
```

## 8. Responsive Breakpoints

The implementation uses these breakpoints:
- **Mobile**: `< 640px` (sm)
- **Tablet**: `640px - 1024px` (md, lg)
- **Desktop**: `> 1024px` (xl)

## 9. Best Practices Implemented

### Performance:
- ✅ **Lazy Loading**: Images load only when needed
- ✅ **Optimized Animations**: Reduced motion support
- ✅ **Efficient State Management**: Minimal re-renders

### Accessibility:
- ✅ **Semantic HTML**: Proper heading hierarchy
- ✅ **Screen Reader Support**: ARIA labels and descriptions
- ✅ **Keyboard Navigation**: Full keyboard accessibility
- ✅ **Color Contrast**: WCAG compliant colors

### Mobile UX:
- ✅ **Touch Targets**: 44px minimum tap areas
- ✅ **Swipe Gestures**: Native mobile interactions
- ✅ **Proper Spacing**: Thumb-friendly layouts
- ✅ **Fast Loading**: Optimized for mobile networks

## 10. Migration Checklist

To migrate to the new responsive components:

- [ ] Replace `Header` with `ResponsiveHeader`
- [ ] Update any direct `AnnouncementBar` usage to include `onClose`
- [ ] Verify all pages use the new `Footer`
- [ ] Test dark mode on all components
- [ ] Verify mobile navigation works properly
- [ ] Check that all translations are in place

## Support

The new implementation provides:
- **Full TypeScript support** with proper interfaces
- **Comprehensive error handling** for missing translations
- **Fallback mechanisms** for unsupported features
- **Progressive enhancement** for advanced features
