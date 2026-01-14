import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './global.css';
import './globals.scss';
import Script from 'next/script';
import { fetchFooter, fetchLogo, fetchSocial } from '../../cosmic';
import SiteContextProvider from '../../context/SiteContext';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Mr.Pizza',
  description:
    'Η καλύτερη πίτσα της πόλης !!! Απόλλωνος 71 & Αρτέμιδος, Ηλιούπολη, 164 43 Αθήνα.',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [social, logo, footer] = await Promise.all([
    fetchSocial(),
    fetchLogo(),
    fetchFooter(),
  ]);

  return (
    <html lang="en">
      <body
        className={`${roboto.className} mx-auto relative max-w-[1920px] bg-[#fafafa]`}
      >
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-EK0DZN5DYK"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-EK0DZN5DYK');
          `}
        </Script>
        <SiteContextProvider logo={logo} social={social} footer={footer}>
          {children}
        </SiteContextProvider>
      </body>
    </html>
  );
}
