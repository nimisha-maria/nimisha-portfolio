import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nimisha Ann Maria — Java Full Stack Developer',
  description:
    'Computer Science graduate and Java Full Stack Developer building modern applications with Java, Spring Boot, React, REST APIs, PostgreSQL, and Generative AI.',
  keywords: [
    'Java Full Stack Developer',
    'Spring Boot',
    'React',
    'REST APIs',
    'PostgreSQL',
    'Generative AI',
    'RAG',
    'LLM',
  ],
  authors: [{ name: 'Nimisha Ann Maria' }],
  openGraph: {
    title: 'Nimisha Ann Maria — Java Full Stack Developer',
    description:
      'Java Full Stack Developer building modern applications with Spring Boot, React, and Generative AI.',
    type: 'website',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0e13',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
