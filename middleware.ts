import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all non-asset, non-API paths so bare routes (e.g., /pricing) get localized
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
