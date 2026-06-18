import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import './globals.css'

const manufaktur = localFont({
  src: [
    { path: './fonts/manufaktur-light.ttf',  weight: '300', style: 'normal' },
    { path: './fonts/manufaktur-medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/manufaktur-bold.ttf',   weight: '700', style: 'normal' },
  ],
  variable: '--font-manufaktur',
  display: 'swap',
})

const microgramma = localFont({
  src: [
    { path: './fonts/microgramma-ext-d-medium.otf',    weight: '500', style: 'normal' },
    { path: './fonts/microgramma-d-extended-bold.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-microgramma',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hangar 17 | Prodaja vozila · Uvoz po narudžbi · Najam',
  description:
    'Hangar 17 – Vaša trgovina za provjerene rabljene automobile, uvoz vozila po narudžbi i najam automobila. Brzo, sigurno i povoljno do vašeg novog vozila!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr">
      <body className={`${manufaktur.variable} ${microgramma.variable} ${inter.variable}`} suppressHydrationWarning>{children}</body>
    </html>
  )
}
