import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ALL_VEHICLES } from '@/lib/vehicles'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Hangar 17 | Prodaja vozila · Uvoz po narudžbi · Najam',
  description:
    'Hangar 17 – Vaša trgovina za provjerene rabljene automobile, uvoz vozila po narudžbi i najam automobila. Brzo, sigurno i povoljno do vašeg novog vozila!',
}

function HeroWordmark() {
  return (
    <Image
      src="/H17 Logo Transparent.png"
      alt="Hangar 17"
      width={1200}
      height={200}
      style={{
        height: 'clamp(52px, 8vw, 120px)',
        width: 'auto',
        maxWidth: '100%',
        filter: 'brightness(0) invert(1)',
        display: 'block',
        margin: '0 auto',
      }}
      priority
    />
  )
}

const tickerItems = [
  'Premium Detailing', 'Najam vozila', 'Prodaja vozila',
  'Dubinsko čišćenje', 'Poliranje vozila', 'Uslužna prodaja',
  'Zaštita vozila', 'Fotografiranje vozila', 'Uvoz po narudžbi',
]

export default function HomePage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-wrap">
          <Image
            src="/pexels-matreding-9784198.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-logo-wrap">
            <HeroWordmark />
          </div>
          <div className="hero-divider" />
          <p className="hero-sub">Sve što vam treba za vaš automobil</p>
          <div className="hero-ctas">
            <a href="/rabljena-vozila" className="hero-cta">Pogledaj vozila</a>
            <a href="/kontakt" className="hero-cta-outline">Kontaktiraj nas</a>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-strip">
        <div className="ticker-inner">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* VOZILA — Prodaja + Uslužna prodaja + Najam */}
      <div className="services-split services-split--3">
        <div className="svc-panel svc-panel--dark">
          <p className="svc-eyebrow">Vozila</p>
          <h2 className="svc-title">Prodaja<br />vozila</h2>
          <p className="svc-desc">
            Provjereni rabljeni automobili i uvoz vozila po narudžbi iz cijele EU.
            Pronalazimo, provjeravamo i dostavljamo vaš automobil.
          </p>
          <a href="/rabljena-vozila" className="svc-link">Pogledaj ponudu →</a>
        </div>
        <div className="svc-panel svc-panel--black">
          <p className="svc-eyebrow">Vozila</p>
          <h2 className="svc-title">Uslužna<br />prodaja</h2>
          <p className="svc-desc">
            Prodajemo vaše vozilo umjesto vas — oglašavamo, pokazujemo
            kupcima i brinemo o svem papirnatom poslu.
          </p>
          <a href="/usluzna-prodaja" className="svc-link">Kako funkcionira →</a>
        </div>
        <div className="svc-panel svc-panel--light">
          <p className="svc-eyebrow">Vozila</p>
          <h2 className="svc-title">Najam<br />vozila</h2>
          <p className="svc-desc">
            Dugoročni najam s fiksnom mjesečnom ratom — bez skrivenih troškova,
            bez brige o servisiranju i osiguranju.
          </p>
          <a href="/najam" className="svc-link svc-link--dark">Saznaj više →</a>
        </div>
      </div>

      {/* RABLJENA VOZILA GALLERY */}
      <section className="used-cars">
        <div className="used-cars-inner">
          <h2 className="sec-heading-xl">Aktualna ponuda</h2>
          <p className="sec-subtitle">Provjereni automobili · Transparentne cijene</p>
          <div className="sec-divider" />
          <div className="cars-gallery">
            {ALL_VEHICLES.slice(0, 5).map((car) => (
              <Link key={car.id} href={`/rabljena-vozila/${car.slug}`} className="car-item">
                {car.images[0]?.url
                  ? <Image src={car.images[0].url} alt={car.images[0].alt} width={400} height={200} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                  : (
                    <div style={{ width: '100%', height: 200, background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="48" height="24" viewBox="0 0 64 32" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M4 22h56M6 22l8-12h28l8 12" /><circle cx="16" cy="25" r="3" /><circle cx="48" cy="25" r="3" />
                      </svg>
                    </div>
                  )
                }
                <div className="car-item-info">
                  <div className="car-item-name">{car.title}</div>
                  <div className="car-item-sub">{car.year} · {car.km.toLocaleString('hr-HR')} km · {car.priceDisplay}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILING */}
      <section className="detailing-section">
        <div className="detailing-inner">
          <div className="detailing-header">
            <p className="section-label">Usluge</p>
            <h2 className="sec-heading-xl detailing-title">Detailing</h2>
          </div>
          <div className="detailing-grid">
            {[
              { n: '01', title: 'Premium Detailing', desc: 'Kompletan tretman vozila — interijer i eksterijer na najvišoj razini.', href: '/detailing#premium-detailing' },
              { n: '02', title: 'Dubinsko čišćenje', desc: 'Temeljito čišćenje svih površina, tepiha, presvlaka i klima sustava.',  href: '/detailing#dubinsko-ciscenje' },
              { n: '03', title: 'Poliranje vozila',   desc: 'Uklanjanje ogrebotina i matiranja laka, vraćanje originalnog sjaja.',    href: '/detailing#poliranje' },
              { n: '04', title: 'Zaštita vozila',     desc: 'Keramički premaz i zaštitne folije koje štite lak godinama.',            href: '/detailing#zastita' },
            ].map(({ n, title, desc, href }) => (
              <Link key={n} href={href} className="detailing-card">
                <span className="detailing-card-num">{n}</span>
                <h3 className="detailing-card-title">{title}</h3>
                <p className="detailing-card-desc">{desc}</p>
              </Link>
            ))}
          </div>
          <div className="detailing-cta">
            <a href="/detailing" className="cta-btn">Više o detailingu →</a>
          </div>
        </div>
      </section>

      {/* FOTOGRAFIRANJE */}
      <section className="foto-section">
        <div className="foto-inner">
          <div>
            <p className="foto-eyebrow">Usluga</p>
            <h2 className="foto-title">Fotografiranje<br />vozila</h2>
          </div>
          <div className="foto-right">
            <p className="foto-desc">
              Profesionalne fotografije vašeg vozila koje privlače pažnju i
              ubrzavaju prodaju. Studio i outdoor snimanja, retuš i obrada
              uključeni — kao dio uslužne prodaje.
            </p>
            <a href="/usluzna-prodaja" className="svc-link">Saznaj više →</a>
          </div>
        </div>
      </section>

      {/* ZAŠTO HANGAR 17 */}
      <section className="why-section">
        <div className="why-inner">
          <div className="why-heading-wrap">
            <h2 className="why-heading">
              Zašto<br /><span className="red">Hangar 17?</span>
            </h2>
          </div>
          <div className="why-grid">
            {[
              { src: '/icon1.gif', alt: 'Provjerena vozila', label: 'Provjerena vozila' },
              { src: '/icon2.gif', alt: 'Brza realizacija',  label: 'Brza realizacija' },
              { src: '/icon3.gif', alt: 'Transport',          label: 'Transport' },
            ].map((item) => (
              <div key={item.label} className="why-item">
                <div className="why-item-icon">
                  <Image src={item.src} alt={item.alt} width={100} height={100} unoptimized />
                </div>
                <div className="why-item-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="financing">
        <div className="financing-inner">
          <p className="financing-text">
            Imate pitanje ili trebate ponudu?<br />
            <strong>Kontaktirajte nas — odgovaramo isti dan.</strong>
          </p>
          <a href="/kontakt" className="cta-btn">Kontaktirajte nas</a>
        </div>
      </section>

      <Footer />
    </>
  )
}
