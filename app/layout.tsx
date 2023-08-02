import './globals.css'
import type { Metadata } from 'next'
import { Yrsa } from 'next/font/google'

const yrsa = Yrsa({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-yrsa',
});

export const metadata: Metadata = {
  title: 'Ascend Landscaping',
  description: "Make your exterior dreams come true with Ascend Landscaping! Proudly serving Chicagoland with quality landscaping at a fair price.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={yrsa.variable}>{children}</body>
    </html>
  )
}
