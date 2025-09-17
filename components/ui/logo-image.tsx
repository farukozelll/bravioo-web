'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface LogoImageProps {
  /** Logo path or URL */
  src?: string;
  /** Alt text for accessibility */
  alt: string;
  /** Company/brand name for fallback */
  name: string;
  /** Size configuration */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Whether to apply grayscale filter initially */
  grayscale?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Callback when logo loads successfully */
  onLoad?: () => void;
  /** Callback when logo fails to load */
  onError?: () => void;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12', 
  lg: 'w-16 h-16',
  xl: 'w-24 h-24'
};

const containerSizeClasses = {
  sm: 'w-10 h-10',
  md: 'w-14 h-14',
  lg: 'w-18 h-18', 
  xl: 'w-28 h-28'
};

/**
 * LogoImage component with multi-format support, fallbacks, and filtering
 * Supports: PNG, SVG, JPEG, WEBP, JPG formats
 * Features: Grayscale filter, hover effects, error fallbacks
 */
export function LogoImage({ 
  src, 
  alt, 
  name, 
  size = 'md', 
  grayscale = false,
  className = '',
  onLoad,
  onError 
}: LogoImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Reset error state when src changes
  useEffect(() => {
    setImageError(false);
    setImageLoaded(false);
  }, [src]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    onLoad?.();
  };

  const handleImageError = () => {
    setImageError(true);
    onError?.();
  };

  // Get fallback initials (first letter of each word, max 2)
  const getInitials = (text: string): string => {
    return text
      .split(' ')
      .slice(0, 2)
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase();
  };

  const imageClasses = `
    object-contain 
    transition-all 
    duration-300 
    ${grayscale && !imageError ? 'filter grayscale group-hover:grayscale-0' : ''}
    ${imageLoaded ? 'opacity-100' : 'opacity-0'}
  `.trim();

  const fallbackClasses = `
    ${sizeClasses[size]}
    flex 
    items-center 
    justify-center 
    font-bold 
    text-slate-600 
    group-hover:text-emerald-600 
    transition-colors 
    duration-300
    ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : size === 'lg' ? 'text-base' : 'text-lg'}
  `.trim();

  return (
    <div className={`
      ${containerSizeClasses[size]}
      relative 
      flex 
      items-center 
      justify-center 
      overflow-hidden
      ${className}
    `}>
      {src && !imageError ? (
        <>
          {/* Actual logo image */}
          <Image
            src={src}
            alt={alt}
            fill
            className={`${imageClasses} object-contain`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            sizes="(max-width: 768px) 50px, (max-width: 1200px) 75px, 100px"
            style={{
              objectFit: 'contain'
            }}
          />
          
          {/* Loading skeleton */}
          {!imageLoaded && (
            <div className="
              absolute 
              inset-0 
              bg-slate-200 
              animate-pulse 
              rounded
            " />
          )}
        </>
      ) : (
        /* Fallback with initials */
        <div className={fallbackClasses}>
          {getInitials(name)}
        </div>
      )}
    </div>
  );
}

/**
 * Hook for dynamic logo format detection and fallback
 * Tries multiple formats in order: webp -> png -> jpg -> svg
 */
export function useLogoFallback(basePath: string, name: string) {
  const [logoSrc, setLogoSrc] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!basePath) {
      setIsLoading(false);
      return;
    }

    // Extract base path without extension
    const basePathWithoutExt = basePath.replace(/\.[^/.]+$/, '');
    
    // Define format priority (modern formats first)
    const formats = ['webp', 'png', 'jpg', 'jpeg', 'svg'];
    
    const tryFormat = async (formatIndex: number): Promise<void> => {
      if (formatIndex >= formats.length) {
        setLogoSrc(undefined);
        setIsLoading(false);
        return;
      }

      const format = formats[formatIndex];
      const testSrc = `${basePathWithoutExt}.${format}`;
      
      try {
        // Test if image exists and loads
        await new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => reject();
          img.src = testSrc;
        });
        
        setLogoSrc(testSrc);
        setIsLoading(false);
      } catch {
        // Try next format
        tryFormat(formatIndex + 1);
      }
    };

    // Start with the provided path, then try fallbacks
    const img = new Image();
    img.onload = () => {
      setLogoSrc(basePath);
      setIsLoading(false);
    };
    img.onerror = () => {
      // Try different formats
      tryFormat(0);
    };
    img.src = basePath;

  }, [basePath]);

  return { logoSrc, isLoading };
}
