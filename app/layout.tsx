import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './../styles/globals.css'
import './../styles/animations.css' // Optional
import './../styles/markdown.css' // For blog content
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Bix Health & Nutrition',
    template: '%s | Bix Health'
  },
  description: 'Science-backed weight loss solutions and supplement reviews',
  keywords: ['keto', 'weight loss', 'nutrition', 'fat burners'],
  openGraph: {
    images: '/images/og-image.jpg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-50">
        <Header />
        <main className="min-h-[calc(100vh-160px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}