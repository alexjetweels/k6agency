import { Inter } from 'next/font/google';
import 'react-multi-carousel/lib/styles.css';
import 'rc-drawer/assets/index.css';
import { Analytics } from '@vercel/analytics/react';

import '../styles/global.css';
const inter = Inter({ subsets: ['latin'] });

const pricingDescription = '$50, 250$ to no limit';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  metadataBase: new URL('https://k6agency.net'),
  title: 'K6 Agency',
  description: `Unleash Your Potential – Infinite Accounts, Boundless Budgets! K6 Agency offers top-notch marketing solutions tailored to your business needs. Join us to experience unparalleled growth and success. Affordable pricing plans: ${pricingDescription}.`,
  keywords: 'agency, marketing, business, SEO, pricing, affordable',
  author: 'K6 Agency',

  charset: 'UTF-8',
  openGraph: {
    title: 'K6 Agency',
    description: `Unleash Your Potential – Infinite Accounts, Boundless Budgets! K6 Agency offers top-notch marketing solutions tailored to your business needs. Join us to experience unparalleled growth and success. Affordable pricing plans: ${pricingDescription}.`,
    type: 'website',
    url: 'https://k6agency.net',
    siteName: 'K6 Agency',
    images: [
      {
        url: 'https://k6agency.net/kdzlogo.png',
      },
    ],
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}

        <Analytics />
      </body>
      <script
        type='module'
        src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'
      ></script>
      <script
        noModule
        src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'
      ></script>

      <script
        async
        data-id='2756681428'
        id='chatling-embed-script'
        type='text/javascript'
        src='https://chatling.ai/js/embed.js'
      ></script>
    </html>
  );
}
