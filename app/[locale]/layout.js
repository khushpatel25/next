import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import Navbar from '../components/navbar';
import '../globals.css'
import "/public/fonts/Gilroy/stylesheet.css"
import "/public/fonts/silka/stylesheet.css"
import Bottomnav from '../components/bottomnav';
 
export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'de'},{locale: 'es'},{locale: 'fr'},{locale: 'hr'},{locale: 'it'},{locale: 'pt'},{locale: 'sr'},{locale: 'tr'}];
}
 
export default async function LocaleLayout({children, params: {locale}}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar/>
          {children}
          <Bottomnav/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}