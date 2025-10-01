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
      dashboardImage: '/images/Bravioo-Category-Mobile_Mockup.png',
      mobileImage: '/images/Bravioo-Category-Mobile_Mockup.png',
      icon: Laptop,
    },
    {
      titleKey: 'features.journey.hr.1.title',
      bodyKey: 'features.journey.hr.1.body',
      highlightKey: 'features.journey.hr.1.highlight',
      dashboardImage: '/images/Bravioo-Home-Mobile_Mockup.png',
      mobileImage: '/images/Bravioo-Home-Mobile_Mockup.png',
      icon: Users,
    },
    {
      titleKey: 'features.journey.hr.2.title',
      bodyKey: 'features.journey.hr.2.body',
      highlightKey: 'features.journey.hr.2.highlight',
      dashboardImage: '/images/Bravioo-Tablet_Mockup.png',
      mobileImage: '/images/Bravioo-Tablet_Mockup.png',
      icon: Send,
      animation: 'send',
    },
    {
      titleKey: 'features.journey.hr.3.title',
      bodyKey: 'features.journey.hr.3.body',
      highlightKey: 'features.journey.hr.3.highlight',
      dashboardImage: '/images/Bravioo-Double2-Mobile_Mockup.png',
      mobileImage: '/images/Bravioo-Double2-Mobile_Mockup.png',
      icon: ClipboardCheck,
    },
    {
      titleKey: 'features.journey.hr.4.title',
      bodyKey: 'features.journey.hr.4.body',
      highlightKey: 'features.journey.hr.4.highlight',
      dashboardImage: '/images/Bravioo-Double-Mobile_Mockup.png',
      mobileImage: '/images/Bravioo-Double-Mobile_Mockup.png',
      icon: TrendingUp,
    },
  ],
  employee: [
    {
      titleKey: 'features.journey.employee.0.title',
      bodyKey: 'features.journey.employee.0.body',
      highlightKey: 'features.journey.employee.0.highlight',
      dashboardImage: '/images/Bravioo-Category-Mobile_Mockup.png',
      mobileImage: '/images/Bravioo-Category-Mobile_Mockup.png',
      icon: Smartphone,
    },
    {
      titleKey: 'features.journey.employee.1.title',
      bodyKey: 'features.journey.employee.1.body',
      highlightKey: 'features.journey.employee.1.highlight',
      dashboardImage: '/images/Bravioo-Home-Mobile_Mockup.png',
      mobileImage: '/images/Bravioo-Home-Mobile_Mockup.png',
      icon: Gift,
    },
    {
      titleKey: 'features.journey.employee.2.title',
      bodyKey: 'features.journey.employee.2.body',
      highlightKey: 'features.journey.employee.2.highlight',
      dashboardImage: '/images/Bravioo-Category-Mobile_Mockup.png',
      mobileImage: '/images/Bravioo-Category-Mobile_Mockup.png',
      icon: MessageSquare,
    },
    {
      titleKey: 'features.journey.employee.3.title',
      bodyKey: 'features.journey.employee.3.body',
      highlightKey: 'features.journey.employee.3.highlight',
      dashboardImage: '/images/Bravioo-Home-Mobile_Mockup.png',
      mobileImage: '/images/Bravioo-Home-Mobile_Mockup.png',
      icon: Heart,
    },
    {
      titleKey: 'features.journey.employee.4.title',
      bodyKey: 'features.journey.employee.4.body',
      highlightKey: 'features.journey.employee.4.highlight',
      // Use Unsplash image to provide a distinct visual for step 5 (employee)
      dashboardImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=1200&fit=crop&crop=center&auto=format&q=80',
      mobileImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=600&fit=crop&crop=center&auto=format&q=80',
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
