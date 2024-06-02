import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <header>
    <ul className='topnav'>
      <li><Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/clientes">Clientes</Link>
      </li>
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>
      <li className='right'>
        <Link href="/sobre">Sobre</Link></li>
    </ul>
</header>
        <section>
          {children}
        </section>
      </body>
    </html>
  );
}