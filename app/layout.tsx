import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingCallButton from './components/FloatingCallButton'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Capt. Arshad Clinic | Trusted Walk-In Medical Care in Karachi',
  description: 'Capt. Arshad Clinic offers fast, reliable walk-in medical care in Karachi. No appointment needed. Call +92 331 2102592.',
  keywords: 'clinic in Karachi, walk-in clinic, doctor near Civil Hospital, medical care Karachi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-body antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  )
}
