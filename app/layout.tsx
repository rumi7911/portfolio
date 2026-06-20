import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

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
  title: 'Muhammad Sohaib Roomi — Cognumi',
  description:
    'Founder of Cognumi. Building AI-managed operations and agentic workflows for service businesses.',
  openGraph: {
    title: 'Muhammad Sohaib Roomi — Cognumi',
    description:
      'Founder of Cognumi. Building AI-managed operations and agentic workflows for service businesses.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Sohaib Roomi — Cognumi',
    description:
      'Founder of Cognumi. Building AI-managed operations and agentic workflows for service businesses.',
  },
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
          <div className="mx-auto max-w-content px-6 pb-24 pt-9">
            <Nav />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
