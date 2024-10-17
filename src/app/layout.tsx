/* eslint-disable @next/next/no-css-tags */
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  )
}
