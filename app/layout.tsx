import './globals.css'
import Image from "next/image";
import type { Metadata } from 'next';
import dynamic from "next/dynamic";
import { Yrsa } from 'next/font/google';
import { Urbanist } from 'next/font/google';

import phoneIcon from "../public/phone_icon.png";
import emailIcon from "../public/email-icon.png";
import locationIcon from "../public/location-icon.png";
import fbIcon from "../public/fb-icon.png";
import igIcon from "../public/ig-icon.png";

import { Analytics } from "@vercel/analytics/react";

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

const ClientRenderedCalendly = dynamic(
	() => import("./components/CalendlyButton"),
	{ ssr: false }
)

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

      <body className={urbanist.variable} id="root-body">
				{children}
				<Analytics />
			</body>

			<ClientRenderedCalendly />

			<footer className={urbanist.variable + " font-serif"}>
				<div className="w-full mt-10 mb-6">
					<hr className="w-[90%] mx-auto border-gray-400" />
				</div>
				 
				<div className="font-serif w-full flex flex-col items-center justify-center text-black leading-none">
					<h1 className="font-semibold text-2xl mb-2">Ascend</h1>

					<div className="flex items-center justify-center mb-4">
						<a href="https://www.facebook.com/profile.php?id=100092322747572&mibextid=LQQJ4d" target="_blank" className="mx-[10px]">
							<Image
								src={fbIcon}
								alt=""
								width={35}
							/>
						</a>
						<a href="https://www.instagram.com/ascend_landscaping/" target="_blank">
							<Image
								src={igIcon}
								alt=""
								width={55}
							/>
						</a>
					</div>

					<span className="font-semibold text-lg">Business Hours</span>
					<span>Mon - Fri 7am-10pm</span>
					<span>Sat - Sun 8am-7pm</span>

				</div>
				<div className="mt-6 w-full flex flex-col justify-center items-center text-black text-lg leading-none pb-12">
					<div className="flex items-center gap-2">
						<Image
							className="block h-4 w-4"
							src={locationIcon}
							alt=""
						/>
						<span>813 E Washingston St<br />West Chicago, IL 60185</span>
					</div>

					<a href="tel:630-639-8089" className="mt-2 flex items-center gap-2">
						<Image
							className="block h-4 w-4"
							src={phoneIcon}
							alt=""
						/>
						<span className="text-[#6EA750] underline text-lg">(630) 639-8089</span>
					</a>

					<a href="mailto:ascend.design1@gmail.com" className="mt-2 flex items-center gap-2">
						<Image
							className="block h-4 w-4"
							src={emailIcon}
							alt=""
						/>
						<span className="text-[#6EA750] underline">ascend.design1@gmail.com</span>
					</a>
				</div>
			</footer>
    </html>
  )
}
