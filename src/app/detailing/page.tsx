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
  'Keramički premaz', 'Paint correction', 'Dubinsko čišćenje',
  'Zaštita folijom', 'Poliranje laka', 'Interior detail',
  'Scratch removal', 'Engine bay', 'Headlight restoration',
]

const services = [
  {
    id: 'premium-detailing',
    n: '01',
    title: 'Premium Detailing',
    short: 'Kompletan tretman iznutra i izvana',
    desc: 'Najsveobuhvatniji paket koji pokriva svaki centimetar vašeg vozila — od detaljnog pranja i dekontaminacije eksterijera do dubokog čišćenja interijera, poliranja i zaštite. Rezultat je vozilo koje izgleda kao novo.',
    includes: [
      'Ručno pranje i dekontaminacija laka',
      'Strojno poliranje — uklanjanje ogrebotina i swirlova',
      'Čišćenje i zaštita plastike i guma',
      'Dubinsko čišćenje interijera usisivanjem i parom',
      'Čišćenje i kondicioniranje kože ili tkanine',
      'Čišćenje stakala iznutra i izvana',
      'Zaštita laka po izboru (wax, sealant ili keramika)',
    ],
  },
  {
    id: 'dubinsko-ciscenje',
    n: '02',
    title: 'Dubinsko čišćenje',
    short: 'Temeljito čišćenje svake površine',
    desc: 'Fokusirano na uklanjanje dubokih nečistoća, mirisa i bakterija iz interijera i eksterijera. Koristimo profesionalnu opremu za ekstrakciju i parno čišćenje koje dopire tamo gdje standardno čišćenje ne može.',
    includes: [
      'Ekstrakcija tepiha i presvlaka vrelom vodom',
      'Parno čišćenje svih plastičnih površina',
      'Ozonska dezinfekcija (uklanjanje mirisa i bakterija)',
      'Čišćenje ventilacijskih otvora i klima sustava',
      'Čišćenje prtljažnog prostora',
      'Čišćenje motora — engine bay detail',
    ],
  },
  {
    id: 'poliranje',
    n: '03',
    title: 'Poliranje vozila',
    short: 'Vraćanje originalnog sjaja laka',
    desc: 'Strojno poliranje kojim uklanjamo ogrebotine, matiranja, swirl markove i oksidaciju laka. Nakon tretmana lak je gladak i reflektivan kao na prvom danu.',
    includes: [
      'Procjena stanja laka — debljinomjer',
      'Jednofazno ili višefazno poliranje po potrebi',
      'Uklanjanje laganih do srednje dubokih ogrebotina',
      'Korekcija boje (paint correction)',
      'Poliranje plastičnih farova (headlight restoration)',
      'Aplikacija zaštite laka po završetku',
    ],
  },
  {
    id: 'zastita',
    n: '04',
    title: 'Zaštita vozila',
    short: 'Dugotrajna zaštita laka i karoserije',
    desc: 'Preventivna zaštita koja čuva vaše vozilo od UV zraka, kiselih kiša, insekata, ogrebotina i nečistoća. Nudimo višerazinsku zaštitu ovisno o potrebama i budžetu.',
    includes: [
      'Keramički premaz (coating) — zaštita 2–5 godina',
      'Paint protection film (PPF) — folija na kritičnim zonama',
      'Zaštitni wax ili polymer sealant',
      'Zaštita stakala hidrofobnim premazom',
      'Zaštita felgi keramičkim premazom',
      'Zaštita interijera — kože, tkanine i plastike',
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
          <div className="hero-eyebrow">Detailing</div>
          <h1 className="hero-h1">Premium<br />Detailing</h1>
          <p className="hero-lead">
            Profesionalni tretman vozila koji prolazi svaki detalj —
            iznutra i izvana. Od poliranja laka do keramičkog premaza.
          </p>
          <a href="#usluge" className="hero-cta">Pogledaj usluge</a>
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

      {/* USLUGE */}
      <section className="dt-services" id="usluge">
        <div className="dt-services-inner">
          {services.map(({ id, n, title, short, desc, includes }) => (
            <div key={id} className="dt-service-row" id={id}>
              <div className="dt-service-left">
                <span className="dt-service-num">{n}</span>
                <h2 className="dt-service-title">{title}</h2>
                <p className="dt-service-short">{short}</p>
              </div>
              <div className="dt-service-right">
                <p className="dt-service-desc">{desc}</p>
                <ul className="dt-includes-list">
                  {includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="included-section">
        <div className="included-inner">
          <div className="included-header">
            <h2 className="included-h2">Kako<br />funkcionira</h2>
            <p className="included-lead">
              Svaki detailing tretman prolazi kroz isti pažljivo definiran proces
              koji garantira vrhunski rezultat bez kompromisa.
            </p>
          </div>
          <div className="included-grid">
            {[
              { title: 'Konzultacija',     body: 'Pregledamo vozilo, procijenimo stanje laka i interijera te predložimo optimalni paket.' },
              { title: 'Priprema',         body: 'Detaljna inspekcija, zaštita osjetljivih dijelova i priprema radnog prostora.' },
              { title: 'Tretman',          body: 'Korak-po-korak izvođenje svih ugovorenih usluga profesionalnom opremom.' },
              { title: 'Završna kontrola', body: 'Pregled svake površine pod profesionalnim osvjetljenjem i korekcija eventualnih nedostataka.' },
              { title: 'Dokumentacija',    body: 'Fotodokumentacija prije i poslije tretmana — vidite razliku crno na bijelo.' },
              { title: 'Preuzimanje',      body: 'Preuzimate vozilo osobno. Savjetujemo vas o održavanju kako bi efekt trajao što dulje.' },
            ].map(({ title, body }) => (
              <div key={title} className="included-item">
                <div className="inc-check">✓</div>
                <div className="inc-title">{title}</div>
                <div className="inc-body">{body}</div>
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
              Javite nam se s fotografijama vozila ili dovedite
              auto na besplatnu procjenu — predložit ćemo najprikladniji paket.
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
              <span className="cta-contact-label">Kontakt forma</span>
              <strong>Pošaljite upit →</strong>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
