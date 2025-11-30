import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/molecules/navbar';
import { GridBackground } from '@/components/organism/background-grid';
import { Footer } from '@/components/organism';
import { Toaster } from 'react-hot-toast';
import { BackToTopButton } from '@/components/molecules/back-to-top-button';
// import { AOS } from '@/components/aos-init';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  fallback: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  fallback: [
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    'Liberation Mono',
    'Courier New',
    'monospace',
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Anam Sadat',
  description: 'Portofolio',
  icons: {
    icon: [{ url: '/logo-as-circle.svg', sizes: '32x32', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <AOSInit /> */}
          <Toaster
            position={'top-right'}
            reverseOrder={false}
            toastOptions={{
              success: {
                style: {
                  background: 'oklch(96.2% 0.044 156.743)',
                },
              },
              error: {
                style: {
                  background: 'oklch(93.6% 0.032 17.717)',
                },
              },
            }}
          />
          <GridBackground>
            <Navbar />
            {children}
            <Footer />
            <BackToTopButton />
          </GridBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
