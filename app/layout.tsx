import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DW Home Solutions | Premium Home Renovation Services',
  description: 'Transform your home with DW Home Solutions. Expert bathroom fitting, kitchen renovations, tiling, plumbing, and home improvement services. Get your free quote today.',
  keywords: 'home renovation, bathroom fitting, kitchen renovation, tiling, plumbing, home improvement, interior design',
  authors: [{ name: 'DW Home Solutions' }],
  openGraph: {
    title: 'DW Home Solutions | Premium Home Renovation Services',
    description: 'Transform your home with expert renovation services',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 