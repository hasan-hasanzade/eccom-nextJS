import type { Metadata } from 'next';
import { Roboto, Yellowtail } from 'next/font/google';
import '../../scss/global.scss';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { ReduxProvider } from '@/redux/provider';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700', '900'], display: 'swap', });

export const metadata: Metadata = {
  title: {
    template: '%s | Organic',
    default: 'Organic', 
  },
  description: 'Generated by create next app',
  icons: {
    icon: [{ url: '/public/favicon/favicon-32x32.png' }, new URL('/icon.png', 'https://example.com')],
    shortcut: ['/shortcut-icon.png'],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
