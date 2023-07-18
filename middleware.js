import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'de','it','pt','tr','sr','hr','es','fr'],
  defaultLocale: 'de',
  localePrefix: 'always'
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
};