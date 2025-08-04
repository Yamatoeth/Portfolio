import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { structuredData } from '../../lib/seo';
import I18nProvider from '../../components/I18nProvider';
import { ThemeProvider } from '../../components/ThemeProvider';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Portfolio - Développeur Web Full Stack',
  description: 'Portfolio de développeur web full stack spécialisé en React, Next.js et Node.js. Découvrez mes projets et réalisations.',
  keywords: 'développeur web, full stack, React, Next.js, Node.js, JavaScript, TypeScript, portfolio',
  authors: [{ name: 'Votre Nom' }],
  creator: 'Votre Nom',
  publisher: 'Votre Nom',
  metadataBase: new URL('https://votre-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://votre-portfolio.vercel.app',
    title: 'Portfolio - Développeur Web Full Stack',
    description: 'Portfolio de développeur web full stack spécialisé en React, Next.js et Node.js. Découvrez mes projets et réalisations.',
    siteName: 'Portfolio - Développeur Web',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio - Développeur Web Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Développeur Web Full Stack',
    description: 'Portfolio de développeur web full stack spécialisé en React, Next.js et Node.js. Découvrez mes projets et réalisations.',
    images: ['/images/og-image.jpg'],
    creator: '@yamatoeth',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* PWA Meta Tags */}
        <meta name="application-name" content="Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Portfolio" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* Optimisations mobiles */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-touch-icon-precomposed" content="/icons/icon-152x152.png" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-180x180.png" />
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
