import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import ToasterContext from './context/ToasterContext'
import AuthContext from './context/AuthContext'
import './globals.css'

import { ModalProvider } from '../../providers/modal-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stella Ecommerce Admin',
  description: 'Admin panel for Stella Ecommerce',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthContext>
          <ToasterContext />
            <ModalProvider />
            {/* <ActiveStatus /> */}
            {children}
        </AuthContext>
      </body>
    </html>
  )
}
