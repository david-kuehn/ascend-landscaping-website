import './globals.css'
import type { Metadata } from 'next'
import { Yrsa } from 'next/font/google'
import { Urbanist } from 'next/font/google'

const yrsa = Yrsa({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-yrsa',
});

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
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
			<head>
				<meta name="theme-color" content="#ffffff" />
			</head>
      <link
        rel="icon"
        href="/icon.png"
        type="image/png"
        sizes="32x32"
      />

      <body className={urbanist.variable}>{children}</body>
    </html>
  )
}
