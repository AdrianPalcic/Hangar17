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
  'Profesionalna fotografija', 'Oglašavanje', 'Pregovaranje s kupcima',
  'Priprema dokumentacije', 'Prijenos vlasništva', 'Pravna zaštita',
  'Procjena vrijednosti', 'Bez stresa', 'Vi čekate — mi radimo',
]

export default function UsluznaPage() {
  return (
    <>
      <Header />

      {/* HERO SPLIT */}
      <section className="hero-split">
        <div className="hero-left">
          <div className="hero-eyebrow">Vozila</div>
          <h1 className="hero-h1">Uslužna<br />prodaja</h1>
          <p className="hero-lead">
            Prodajemo vaše vozilo umjesto vas. Vi određujete cijenu,
            mi se brinemo za sve ostalo — od fotografije do potpisa ugovora.
          </p>
          <a href="#kako-funkcionira" className="hero-cta">Kako funkcionira</a>
        </div>
        <div className="najam-hero-right">
          <div className="hero-right-label">Zašto uslužna prodaja?</div>
          <div className="pillars">
            {[
              {
                n: '01', title: 'Bez gnjavaže',
                body: 'Ne morate odgovarati na upite, dogovarati razglede ni pregovarati s kupcima. Mi preuzimamo sve.',
              },
              {
                n: '02', title: 'Brža prodaja',
                body: 'Profesionalne fotografije, aktivno oglašavanje i naša mreža kupaca znače kraće čekanje na prodaju.',
              },
              {
                n: '03', title: 'Bolja cijena',
                body: 'Znamo tržišne vrijednosti i vičani smo pregovaranju — prodajemo vozilo za fer cijenu, ne ispod vrijednosti.',
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
        <div className="section-label">Proces</div>
        <h2 className="section-h2">Četiri koraka<br />do prodaje</h2>
        <div className="how-grid how-grid--4">
          {[
            {
              n: '01', title: 'Donosite vozilo',
              body: 'Dovedete vozilo k nama na besplatnu procjenu vrijednosti i pregled stanja. Zajedno dogovorimo prodajnu cijenu.',
            },
            {
              n: '02', title: 'Mi se brinemo',
              body: 'Fotografiramo vozilo, postavljamo oglase na sve relevantne portale i odgovaramo na upite potencijalnih kupaca.',
            },
            {
              n: '03', title: 'Nalazimo kupca',
              body: 'Organiziramo razglede, pregovaramo s kupcima i filtriramo ozbiljne od neozbiljnih interesa.',
            },
            {
              n: '04', title: 'Završavamo posao',
              body: 'Pripremamo svu dokumentaciju, brinemo o prijenosu vlasništva i isplati. Vi potpisujete i preuzimate novac.',
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

      {/* ŠTO UKLJUČUJEMO */}
      <section className="included-section">
        <div className="included-inner">
          <div className="included-header">
            <h2 className="included-h2">Što je<br />uključeno</h2>
            <p className="included-lead">
              Svaki aspekt prodaje vozila je pokriven. Od trenutka kad
              dovedete auto do trenutka kad primite novac — na nama je sve.
            </p>
          </div>
          <div className="included-grid">
            {[
              { title: 'Procjena vrijednosti',      body: 'Besplatna procjena tržišne vrijednosti vašeg vozila na temelju stvarnih podataka.' },
              { title: 'Profesionalna fotografija', body: 'Fotografiramo vozilo u našem prostoru — studio i outdoor, retuš uključen.' },
              { title: 'Aktivno oglašavanje',       body: 'Postavljamo oglas na Njuškalo, Njuškalo Premium, Auto-portal i ostale portale.' },
              { title: 'Komunikacija s kupcima',    body: 'Preuzimamo sve upite, dogovaramo razglede i pregovaramo o cijeni u vaše ime.' },
              { title: 'Dokumentacija',             body: 'Pripremamo kupoprodajni ugovor, potvrde i svu potrebnu papirologiju.' },
              { title: 'Prijenos vlasništva',       body: 'Brinemo o odjavi i prijavi vozila — bez gužvi u uredima i čekanja u redovima.' },
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

      {/* FOTOGRAFIJA */}
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

      {/* NAKNADA */}
      <section className="how-section">
        <div className="section-label">Transparentnost</div>
        <h2 className="section-h2">Kako funkcionira<br />naknada</h2>
        <div className="how-grid">
          {[
            {
              n: '→', title: 'Vi određujete cijenu',
              body: 'Sami postavljate minimalnu prodajnu cijenu ispod koje nećemo ići. Sve iznad toga ostaje vama.',
            },
            {
              n: '→', title: 'Komisija po dogovoru',
              body: 'Naša naknada je fiksni postotak dogovorene cijene — bez skrivenih troškova i bez iznenađenja na kraju.',
            },
            {
              n: '→', title: 'Plaćate tek po prodaji',
              body: 'Ne plaćate ništa unaprijed. Naknadu oduzimamo tek kad vozilo bude prodano i novac naplaćen.',
            },
          ].map(({ n, title, body }) => (
            <div key={title} className="how-item">
              <div className="how-n" style={{ fontSize: 28 }}>{n}</div>
              <div className="how-title">{title}</div>
              <div className="how-body">{body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="kontakt">
        <div className="cta-inner">
          <div>
            <h2 className="cta-h2">Dovedite<br />vozilo</h2>
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
