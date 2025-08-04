import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { structuredData } from '../../lib/seo';
import I18nProvider from '../../components/I18nProvider';
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
