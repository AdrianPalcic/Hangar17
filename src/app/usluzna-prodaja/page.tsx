import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Uslužna prodaja | Hangar 17',
  description:
    'Prodajemo vaše vozilo umjesto vas — oglašavamo, pokazujemo kupcima i brinemo o svem papirnatom poslu. Hangar 17, Zagreb.',
}

const tickerItems = [
  'Profesionalne fotografije', 'Aktivno oglašavanje', 'Pregovaranje s kupcima',
  'Priprema dokumentacije', 'Prijenos vlasništva',
  'Procjena vrijednosti', 'Brža prodaja',
]

export default function UsluznaPage() {
  return (
    <>
      <Header />

      {/* HERO SPLIT */}
      <section className="hero-split">
        <div className="hero-left">
          <h1 className="hero-h1">Uslužna<br />prodaja</h1>
          <p className="hero-lead">
            Prodajemo vaše vozilo umjesto vas. Zajedno određujemo cijenu,
            mi se brinemo za sve ostalo – od fotografija do potpisa ugovora.
          </p>
          <a href="#kako-funkcionira" className="hero-cta">Kako funkcionira?</a>
        </div>
        <div className="najam-hero-right">
          <div className="hero-right-label">Zašto uslužna prodaja?</div>
          <div className="pillars">
            {[
              {
                n: '01', title: 'Bez stresa',
                body: 'Ne morate odgovarati na upite, dogovarati razglede vozila ni pregovarati s kupcima. Mi preuzimamo sve.',
              },
              {
                n: '02', title: 'Brža prodaja',
                body: 'Profesionalne fotografije, aktivno oglašavanje i naša mreža kupaca podrazumijevaju bržu prodaju.',
              },
              {
                n: '03', title: 'Procjena vrijednosti',
                body: 'Profesionalna i temeljita procjena tržišne vrijednosti vašeg vozila.',
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="pillar">
                <div className="pillar-num">{n}</div>
                <div>
                  <div className="pillar-title">{title}</div>
                  <div className="pillar-body">{body}</div>
                </div>
              </div>
            ))}
          </div>
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

      {/* KAKO FUNKCIONIRA */}
      <section className="how-section" id="kako-funkcionira">
        <h2 className="section-h2">Četiri koraka<br />do prodaje</h2>
        <div className="how-grid how-grid--4">
          {[
            {
              n: '01', title: 'Pregled vozila',
              body: 'Besplatna procjena vozila i pregled stanja. Zajedno dogovaramo prodajnu cijenu.',
            },
            {
              n: '02', title: 'Priprema vozila i oglašavanje',
              body: 'Svako vozilo prolazi detailing proces pripreme za oglašavanje. Fotografiramo automobil, postavljamo oglase i aktivno tražimo kupca.',
            },
            {
              n: '03', title: 'Razgledavanje vozila',
              body: 'Organiziramo razgled i pregovoramo s kupcima u vaše ime.',
            },
            {
              n: '04', title: 'Završni korak',
              body: 'Pripremamo prodajnu dokumentaciju. Mogućnost posredovanja pri prijenosu vlasništva.',
            },
          ].map(({ n, title, body }) => (
            <div key={n} className="how-item">
              <div className="how-n">{n}</div>
              <div className="how-title">{title}</div>
              <div className="how-body">{body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PAKETI USLUŽNE PRODAJE */}
      <section className="packages-section">
        <div className="packages-inner">
          <h2 className="section-h2">Paketi<br />uslužne prodaje</h2>
          <div className="packages-grid">
            {[
              {
                name: 'Osnovni paket', tag: 'Priprema i fotografiranje', price: '290€',
                items: [
                  'Procjena tržišne vrijednosti vašeg vozila',
                  'Premium pranje',
                  'Kemijsko čišćenje',
                  'Pranje motornog prostora',
                  'Profesionalno fotografiranje',
                  'Savjeti za samostalno oglašavanje',
                ],
              },
              {
                name: 'Prodajni paket', tag: 'Najpopularniji paket', price: '450€', featured: true,
                items: [
                  'Sve iz Osnovnog paketa',
                  'Postavljanje oglasa u trajanju od 3 mjeseca',
                  'Komunikacija s kupcima',
                  'Organizacija razgleda vozila',
                  'Pregovaranje u vaše ime',
                  'Priprema kupoprodajne dokumentacije',
                ],
              },
              {
                name: 'All-in paket', tag: 'Potpuna usluga', price: '720€',
                items: [
                  'Sve iz Prodajnog paketa',
                  'Postavljanje oglasa u trajanju od 6 mjeseci',
                  'Čuvanje vozila za vrijeme prodaje',
                  'Prijenos vlasništva',
                  'Prioritetno oglašavanje na portalima i društvenim mrežama',
                  'Vi ne morate biti prisutni ni u jednom koraku',
                ],
              },
            ].map(({ name, tag, price, items, featured }) => (
              <div key={name} className={`package-card${featured ? ' featured' : ''}`}>
                <div className="package-name">{name}</div>
                <div className="package-tag">{tag}</div>
                <ul className="package-list">
                  {items.map((it) => <li key={it}>{it}</li>)}
                </ul>
                <div className="package-price">{price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="kontakt">
        <div className="cta-inner">
          <div>
            <h2 className="cta-h2">Dogovorite<br />termin</h2>
            <p className="cta-sub">
              Javite nam se za besplatnu procjenu i dogovor.
              Cijeli proces objašnjavamo bez obaveze — vi odlučujete.
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
