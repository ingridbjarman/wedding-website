'use client'
import Header from '@/components/layout/header'
import Nav from '@/components/nav'
import Link from 'next/link'
import './globals.css'
import { usePathname } from 'next/navigation'
import Head from './head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  if(pathname != "/password" ) {
    return (
      <html lang="en">
        <Head />
        <body>
          <Header />
          <Nav />
          {children}
        </body>
      </html>
    )
  } else {
    return (
      <html lang="en">
        <Head />
        <body>
          {children}
        </body>
      </html>
    )
  }
}
