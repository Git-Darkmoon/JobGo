import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Providers from "./providers"
import NextTopLoader from "nextjs-toploader"

const RedHat = localFont({
  variable: "--font-redhat",
  src: "./fonts/RedHatDisplayVF.woff",
})

export const metadata: Metadata = {
  title: "JobGo - Track Your Job Applications and Stay Organized",
  description:
    "JobGo helps you streamline your job search by tracking applications, interview schedules, and follow-ups in one place. Stay organized and increase your chances of landing your dream job with smart insights and easy-to-use tools.",
  keywords: [
    "job application tracker",
    "track job applications",
    "job search management",
    "job hunting tool",
    "organize job search",
    "job follow-up manager",
    "resume management",
    "career tracker",
    "job application status",
    "interview schedule tracker",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    // url: "https://your-jobgo-url.com",
    title: "JobGo - Track Your Job Applications and Stay Organized",
    description:
      "Track your job applications, interview schedules, and follow-ups with JobGo. Stay organized and increase your chances of landing the perfect job.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#28d768",
    "application-name": "JobGo",
    "apple-mobile-web-app-title": "JobGo",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${RedHat.variable} antialiased`}>
          <NextTopLoader color="#daffed" height={5} />

          {children}
        </body>
      </html>
    </Providers>
  )
}
