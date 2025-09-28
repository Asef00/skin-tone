import type { Metadata } from 'next'
import { Geist, Geist_Mono, Vazirmatn } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/app/components/theme-provider'
import Navigation from './components/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const vazirmatn = Vazirmatn({
  variable: '--font-vazirmatn',
  subsets: ['arabic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Beauty Tone',
  description:
    'Beauty Tone is a tool that helps you find the perfect color for your skin tone.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()

  return (
    <html
      lang={locale}
      dir={locale === 'fa' ? 'rtl' : 'ltr'}
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${vazirmatn.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navigation />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
