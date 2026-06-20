import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { ThemeProvider } from '@/components/ThemeProvider';
import {
  absoluteUrl,
  author,
  siteDescription,
  siteName,
  siteUrl,
} from '@/content/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: 'Muhammad Sohaib Roomi — Secure AI Operations Systems',
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'AI operations',
    'agentic workflows',
    'AI automation consulting',
    'service business automation',
    'secure AI systems',
    'Claude Code mobile apps',
    'React Native AI development',
    'Expo app development',
    'Cognumi',
    'Muhammad Sohaib Roomi',
  ],
  authors: [{ name: author.name, url: siteUrl }],
  creator: author.name,
  publisher: author.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Muhammad Sohaib Roomi — Secure AI Operations Systems',
    description: siteDescription,
    url: siteUrl,
    siteName,
    type: 'website',
    images: [
      {
        url: absoluteUrl('/headshot.jpg'),
        width: 600,
        height: 800,
        alt: author.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Sohaib Roomi — Secure AI Operations Systems',
    description: siteDescription,
    images: [absoluteUrl('/headshot.jpg')],
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: author.name,
  jobTitle: author.jobTitle,
  url: siteUrl,
  email: `mailto:${author.email}`,
  image: absoluteUrl('/headshot.jpg'),
  sameAs: author.sameAs,
  worksFor: {
    '@type': 'Organization',
    name: 'Cognumi',
    url: 'https://www.cognumi.co.uk/',
  },
  knowsAbout: [
    'AI operations',
    'agentic workflows',
    'service business automation',
    'secure AI systems',
    'cybersecurity',
    'macOS utilities',
    'Claude Code',
    'React Native',
    'Expo',
    'AI-assisted mobile app development',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  publisher: {
    '@type': 'Person',
    name: author.name,
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Secure AI operations consulting',
  url: siteUrl,
  image: absoluteUrl('/headshot.jpg'),
  description: siteDescription,
  founder: {
    '@type': 'Person',
    name: author.name,
  },
  areaServed: 'Worldwide',
  serviceType: [
    'AI operations design',
    'Agentic workflow implementation',
    'Automation consulting',
    'Secure AI systems',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <JsonLd data={personJsonLd} />
          <JsonLd data={websiteJsonLd} />
          <JsonLd data={serviceJsonLd} />
          <div className="relative mx-auto max-w-content px-6 pb-24 pt-8">
            <Nav />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
