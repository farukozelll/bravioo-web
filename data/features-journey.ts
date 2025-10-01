import { 
  Laptop, 
  Users, 
  Send, 
  ClipboardCheck, 
  TrendingUp, 
  Smartphone, 
  Gift, 
  MessageSquare, 
  Heart 
} from 'lucide-react';

export type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export type AnimationType = 'send';

export type StepItem = {
  readonly titleKey: string;
  readonly bodyKey: string;
  readonly highlightKey: string;
  readonly dashboardImage: string;
  readonly mobileImage: string;
  readonly icon: IconType;
  readonly animation?: AnimationType;
};

export type PathType = 'hr' | 'employee';

export type JourneyMap = {
  readonly [K in PathType]: readonly StepItem[];
};

export const journeySteps: JourneyMap = {
  hr: [
    {
      titleKey: 'features.journey.hr.0.title',
      bodyKey: 'features.journey.hr.0.body',
      highlightKey: 'features.journey.hr.0.highlight',
      dashboardImage: '/images/features/1.png',
      mobileImage: '/images/features/1.png',
      icon: Laptop,
    },
    {
      titleKey: 'features.journey.hr.1.title',
      bodyKey: 'features.journey.hr.1.body',
      highlightKey: 'features.journey.hr.1.highlight',
      dashboardImage: '/images/features/2.png',
      mobileImage: '/images/features/2.png',
      icon: Users,
    },
    {
      titleKey: 'features.journey.hr.2.title',
      bodyKey: 'features.journey.hr.2.body',
      highlightKey: 'features.journey.hr.2.highlight',
      dashboardImage: '/images/features/3.png',
      mobileImage: '/images/features/3.png',
      icon: Send,
      animation: 'send',
    },
    {
      titleKey: 'features.journey.hr.3.title',
      bodyKey: 'features.journey.hr.3.body',
      highlightKey: 'features.journey.hr.3.highlight',
      dashboardImage: '/images/features/4.png',
      mobileImage: '/images/features/4.png',
      icon: ClipboardCheck,
    },
    {
      titleKey: 'features.journey.hr.4.title',
      bodyKey: 'features.journey.hr.4.body',
      highlightKey: 'features.journey.hr.4.highlight',
      dashboardImage: '/images/features/5.png',
      mobileImage: '/images/features/5.png',
      icon: TrendingUp,
    },
  ],
  employee: [
    {
      titleKey: 'features.journey.employee.0.title',
      bodyKey: 'features.journey.employee.0.body',
      highlightKey: 'features.journey.employee.0.highlight',
      dashboardImage: '/images/features/7.png',
      mobileImage: '/images/features/7.png',
      icon: Smartphone,
    },
    {
      titleKey: 'features.journey.employee.1.title',
      bodyKey: 'features.journey.employee.1.body',
      highlightKey: 'features.journey.employee.1.highlight',
      dashboardImage: '/images/features/8.png',
      mobileImage: '/images/features/8.png',
      icon: Gift,
    },
    {
      titleKey: 'features.journey.employee.2.title',
      bodyKey: 'features.journey.employee.2.body',
      highlightKey: 'features.journey.employee.2.highlight',
      dashboardImage: '/images/features/6.png',
      mobileImage: '/images/features/6.png',
      icon: MessageSquare,
    },
    {
      titleKey: 'features.journey.employee.3.title',
      bodyKey: 'features.journey.employee.3.body',
      highlightKey: 'features.journey.employee.3.highlight',
      dashboardImage: '/images/features/7.png',
      mobileImage: '/images/features/7.png',
      icon: Heart,
    },
    {
      titleKey: 'features.journey.employee.4.title',
      bodyKey: 'features.journey.employee.4.body',
      highlightKey: 'features.journey.employee.4.highlight',
      // Use Unsplash image to provide a distinct visual for step 5 (employee)
      dashboardImage: '/images/features/8.png',
      mobileImage: '/images/features/8.png',
      icon: Heart,
    },
  ],
};

// Step navigation thumbnails - using Unsplash images for better visuals
export const stepNavigationThumbs = [
  'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=600&fit=crop&crop=center&auto=format&q=80', // Modern dashboard
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=600&fit=crop&crop=center&auto=format&q=80', // Team collaboration
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&crop=center&auto=format&q=80', // Analytics dashboard
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&crop=center&auto=format&q=80', // Data visualization
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=600&fit=crop&crop=center&auto=format&q=80', // Business growth
] as const;
