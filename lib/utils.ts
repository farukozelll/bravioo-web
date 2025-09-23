import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(
  amount: number,
  currency: 'USD' | 'EUR' | 'TRY' = 'USD'
) {
  // const symbols = {
  //   USD: '$',
  //   EUR: '€',
  //   TRY: '₺',
  // }; // TODO: Use this for symbol-based formatting

  const locales = {
    USD: 'en-US',
    EUR: 'de-DE',
    TRY: 'tr-TR',
  };

  return new Intl.NumberFormat(locales[currency], {
    style: 'currency',
    currency,
  }).format(amount);
}

export function formatDate(date: Date, locale: string = 'en') {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
