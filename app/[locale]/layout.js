import { useLocale } from 'next-intl';
import Navbar from '../components/navbar'
import '../globals.css'
import { notFound } from 'next/navigation';
import "/public/fonts/silka/stylesheet.css"
import "/public/fonts/Gilroy/stylesheet.css"
import Bottomnav from '../components/bottomnav';


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}




export default function RootLayout({ children,params }) {
  const locale = useLocale();
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body>
        <Navbar/>
        {children}
        {/* <Bottomnav/> */}
        </body>
    </html>
  )
}
