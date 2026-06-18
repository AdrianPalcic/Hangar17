'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/',                 label: 'Naslovna' },
  { href: '/rabljena-vozila',  label: 'Prodaja vozila' },
  { href: '/usluzna-prodaja',  label: 'Uslužna prodaja' },
  { href: '/najam',            label: 'Najam' },
  { href: '/detailing',        label: 'Detailing' },
  { href: '/kontakt',          label: 'Kontakt' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-logo-wrap">
          <Link href="/" className="header-logo">
            <Image
              src="/H17 Logo Transparent.png"
              alt="Hangar 17"
              width={180}
              height={38}
              style={{ height: 38, width: 'auto', filter: 'brightness(0) invert(1)' }}
            />
          </Link>
        </div>

        <nav className={`site-nav${open ? ' open' : ''}`} id="siteNav">
          <ul>
            {navLinks.map(({ href, label }) => (
              <li key={href} className={pathname === href ? 'active' : ''}>
                <Link href={href} onClick={() => setOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="burger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
