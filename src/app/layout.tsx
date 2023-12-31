import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import getCurrentUSer from './actions/getCurrentUSer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUSer()
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar currentUser={currentUser}/>
        {children}</body>
    </html>
  )
}
