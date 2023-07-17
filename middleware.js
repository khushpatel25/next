import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'de','cr','it','pt','tr'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
};