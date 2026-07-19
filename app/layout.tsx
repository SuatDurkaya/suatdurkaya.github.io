import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Silkscreen, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const pixel = Silkscreen({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-pixel',
})

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Suat Durkaya — Aspiring Platform Engineer',
  description:
    'DevOps / Platform Engineering portfolio of Suat Durkaya. Linux, Docker, AWS, Prometheus, Grafana — building systems that are understandable, repeatable, and reliable.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0E0708',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${pixel.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
