'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useReducedMotion } from 'framer-motion';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import aggressiveJson from '@/components/dolphin-lottie.aggressive.json';

type LoaderProps = {
  size?: number;
  className?: string;
  colorClassName?: string;
};

export function Loader({ size = 56, className = '', colorClassName = 'text-emerald-600' }: LoaderProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <span
        aria-label="Loading"
        className={`inline-block ${className}`}
        role="status"
      >
        <span
          className={`block animate-spin rounded-full border-2 border-current border-t-transparent ${colorClassName}`}
          style={{ width: size, height: size }}
        />
      </span>
    );
  }

  return (
    <span aria-label="Loading" role="status" className={`inline-flex items-center justify-center ${className}`}>
      <Lottie
        animationData={aggressiveJson}
        loop
        autoplay
        style={{ width: size, height: size }}
        rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
      />
    </span>
  );
}


