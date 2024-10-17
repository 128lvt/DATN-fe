/* eslint-disable @next/next/no-css-tags */
import Header from '@/app/components/main/Header'
import '../globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '@/app/components/main/Footer'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: '6AE Fashion Shop',
  description: '...',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  )
}
