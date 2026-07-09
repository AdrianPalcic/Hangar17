import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-logo">
              <Image
                src="/H17 Logo Transparent.png"
                alt="Hangar 17"
                width={220}
                height={44}
                style={{ height: 44, width: 'auto', filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <a
              href="https://www.njuskalo.hr/trgovina/rikverczg"
              target="_blank"
              rel="noreferrer"
              className="footer-njuskalo"
            >
              <Image src="/njuskalo.png" alt="" width={22} height={22} unoptimized />
              Njuškalo trgovina
            </a>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Usluge</div>
            <Link href="/rabljena-vozila">Prodaja vozila</Link>
            <Link href="/rabljena-vozila#narudzba">Uvoz po narudžbi</Link>
            <Link href="/usluzna-prodaja">Uslužna prodaja</Link>
            <Link href="/najam">Najam vozila</Link>
            <Link href="/detailing">Detailing</Link>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Kontakt</div>
            <a href="mailto:info@hangar17.hr">info@hangar17.hr</a>
            <a href="tel:+385916309076">+385 91 6309 076</a>
            <span>Šandora Brešćenskog 17<br />10410 Pleso</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© 2025 Hangar 17 d.o.o.</span>
        </div>
      </div>
    </footer>
  )
}
