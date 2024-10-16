/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from 'next'
import '../globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '@/app/components/main/header'
import Footer from '@/app/components/main/footer'

export const metadata: Metadata = {
  title: 'Next',
  description: '...',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="css/font-awesome.min.css"
            type="text/css"
          />
          <link rel="stylesheet" href="/css/style.css" type="text/css" />
        </head>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  )
}
