'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations();

  useEffect(() => {
    // Log error to error reporting service
    console.error('Application error:', error);
    
    // You can integrate with error tracking services here
    // Example: Sentry.captureException(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/20 mb-6">
            <AlertTriangle className="w-10 h-10 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            {t('error.title') || 'Oops! Something went wrong'}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            {t('error.description') || "We're sorry, but something unexpected happened."}
          </p>
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-left">
              <summary className="cursor-pointer font-semibold text-sm text-gray-700 dark:text-gray-300">
                Error Details (Development Only)
              </summary>
              <pre className="mt-2 text-xs text-red-600 dark:text-red-400 overflow-auto">
                {error.message}
              </pre>
              {error.digest && (
                <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                  Error ID: {error.digest}
                </p>
              )}
            </details>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            className="inline-flex items-center gap-2"
            size="lg"
          >
            <RefreshCw className="w-4 h-4" />
            {t('error.tryAgain') || 'Try Again'}
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="inline-flex items-center gap-2"
          >
            <Link href="/">
              <Home className="w-4 h-4" />
              {t('error.goHome') || 'Go Home'}
            </Link>
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('error.contact') || 'If this problem persists, please'}{' '}
            <Link
              href="/contact"
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline"
            >
              {t('error.contactUs') || 'contact our support team'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}


