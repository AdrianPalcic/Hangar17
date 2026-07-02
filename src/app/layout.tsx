import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '500', '600', '700'],
  variable: '--font-manufaktur',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
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
      <body className={`${outfit.variable} ${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>{children}</body>
    </html>
  )
}
