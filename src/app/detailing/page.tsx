import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Detailing | Hangar 17',
  description:
    'Profesionalni auto detailing — premium čišćenje, poliranje, keramički premaz i zaštita vozila. Hangar 17, Zagreb.',
}

const tickerItems = [
  'Dubinsko čišćenje', 'Detaljno čišćenje eksterijera', 'Poliranje laka',
  'Pranje motornog prostora', 'Detaljno čišćenje interijera',
]

const packages = [
  {
    id: 'premium-detailing',
    name: 'Premium Detailing',
    tag: 'Kompletan tretman iznutra i izvana',
    items: [
      'Detaljno pranje izvana',
      'Detaljno pranje felgi',
      'Pranje svih pragova, štokova i prtljažnog prostora',
      'Detaljno pranje unutrašnjosti',
      'Pranje stakala',
      'Kemijsko čišćenje tepiha',
    ],
    priceSmall: '55,00€',
    priceLarge: '65,00€',
  },
  {
    id: 'kemijsko-ciscenje',
    name: 'Kemijsko čišćenje',
    tag: 'Premium detailing + kemijsko čišćenje unutrašnjosti',
    items: [
      'Premium detailing',
      'Kemijsko čišćenje unutrašnjosti',
    ],
    priceSmall: '180,00€',
    priceLarge: '200,00€',
  },
  {
    id: 'poliranje',
    name: 'Poliranje vozila',
    desc: 'Jednoslojno poliranje vozila za vraćanje prvotnog sjaja. Uključuje premium detailing i pranje motornog prostora.',
    priceSmall: '260,00€',
    priceLarge: '320,00€',
  },
  {
    id: 'vip-care-club',
    name: 'VIP Care Club',
    tag: 'Paket održavanja — premium detailing na mjesečnoj bazi',
    items: [
      '3 dolaska mjesečno',
      'Povlašteni termini',
      'Nadopuna tekućine za pranje vjetrobranskog stakla',
      'Za svakih 6 uzastopnih mjeseci voucher u iznosu 50,00€',
    ],
    note: '*Voucher vrijedi za neku od naših usluga koje ne obuhvaća VIP Care Club paket.',
    price: '145,00€',
    priceUnit: '/ mjesečno',
    featured: true,
  },
]

const addonGroups = [
  {
    title: 'Pranje po elementima',
    items: [
      { label: 'Uklanjanje psećih dlaka', price: '45 €' },
      { label: 'Čišćenje kože sva sjedala', price: '90 €' },
      { label: 'Čišćenje motornog prostora', price: '40 €' },
    ],
  },
  {
    title: 'Kemijsko čišćenje po elementima',
    items: [
      { label: 'Prednja sjedala', price: '50 €' },
      { label: 'Stražnja klupa', price: '60 €' },
      { label: 'Tepisi komplet', price: '20 €' },
      { label: 'Prtljažnik', price: '20 €' },
      { label: 'Dječja sjedalica', price: '30 €' },
    ],
  },
]

export default function DetailingPage() {
  return (
    <>
      <Header />

      {/* HERO SPLIT */}
      <section className="hero-split">
        <div className="hero-left">
          <h1 className="hero-h1">Premium<br />Detailing</h1>
          <p className="hero-lead">
            Profesionalni tretman vozila. Detaljno čišćenje interijera i
            eksterijera te održavanje vozila.
          </p>
          <a href="#cjenik" className="hero-cta">Pogledaj cjenik</a>
        </div>
        <div className="najam-hero-right" style={{ position: 'relative', overflow: 'hidden' }}>
          <Image
            src="/detailing.jpg"
            alt="Auto detailing"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </section>

      {/* TICKER */}
      <div className="includes-strip">
        <div className="includes-inner">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* CJENIK */}
      <section className="cjenik-section" id="cjenik">
        <div className="cjenik-inner">
          <h2 className="section-h2">Cjenik<br />usluga</h2>
          <div className="cjenik-grid">
            {packages.map(({ id, name, tag, desc, items, note, price, priceUnit, priceSmall, priceLarge, featured }) => (
              <div key={id} className={`cjenik-card${featured ? ' featured' : ''}`}>
                <div className="cjenik-name">{name}</div>
                {tag && <div className="cjenik-tag">{tag}</div>}
                {desc && <p className="cjenik-desc">{desc}</p>}
                {items && (
                  <ul className="cjenik-list">
                    {items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                )}
                {note && <p className="cjenik-note">{note}</p>}
                <div className="cjenik-price-block">
                  {price ? (
                    <div className="cjenik-price-single">
                      <span className="cjenik-price">{price}</span>
                      <span className="cjenik-price-unit">{priceUnit}</span>
                    </div>
                  ) : (
                    <div className="cjenik-price-split">
                      <div className="cjenik-price-item">
                        <span className="cjenik-price-label">Mali automobil</span>
                        <span className="cjenik-price">{priceSmall}</span>
                      </div>
                      <div className="cjenik-price-item">
                        <span className="cjenik-price-label">Veliki automobil</span>
                        <span className="cjenik-price">{priceLarge}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DODATNE USLUGE */}
      <section className="addons-section">
        <div className="addons-inner">
          <h2 className="section-h2">Dodatne<br />usluge</h2>
          <div className="addons-grid">
            {addonGroups.map(({ title, items }) => (
              <div key={title} className="addons-col">
                <div className="addons-col-title">{title}</div>
                {items.map(({ label, price }) => (
                  <div key={label} className="addon-row">
                    <span className="addon-label">{label}</span>
                    <span className="addon-price">{price}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="kontakt">
        <div className="cta-inner">
          <div>
            <h2 className="cta-h2">Zatražite<br />ponudu</h2>
            <p className="cta-sub">
              Javite nam se i dogovorite svoj termin.
            </p>
          </div>
          <div className="cta-contact-card">
            <a className="cta-contact-item" href="tel:+385916309076">
              <span className="cta-contact-label">Telefon</span>
              <strong>+385 91 6309 076</strong>
            </a>
            <a className="cta-contact-item" href="mailto:info@hangar17.hr">
              <span className="cta-contact-label">E-mail</span>
              <strong>info@hangar17.hr</strong>
            </a>
            <a className="cta-contact-item" href="/kontakt">
              <span className="cta-contact-label">Kontakt obrazac</span>
              <strong>Pošaljite upit →</strong>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
