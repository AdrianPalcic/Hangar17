'use client'

export const dynamic = 'force-dynamic'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const includesItems = [
  'Osiguranje od odgovornosti', 'Kasko osiguranje',
  'Redovni servis i potrošni materijal', 'Tehnički pregled',
  'Gume i zamjena guma', 'Opcija otkupa vozila',
]

export default function NajamPage() {
  return (
    <>
      <Header />

      {/* HERO SPLIT */}
      <section className="hero-split">
        <div className="hero-left">
          <div className="hero-eyebrow">Najam vozila</div>
          <h1 className="hero-h1">Dugoročni<br />najam</h1>
          <p className="hero-lead">
            Zamijenite troškove kupnje predvidivom mjesečnom ratom.
            Vozilo koje vam odgovara, bez početnih ulaganja i bez skrivenih troškova.
          </p>
          <a href="#kontakt-forma" className="hero-cta">Zatražite ponudu</a>
        </div>
        <div className="najam-hero-right">
          <div className="hero-right-label">Tri razloga za najam</div>
          <div className="pillars">
            {[
              {
                n: '01', title: 'Jednostavno',
                body: 'Jednostavno sklapanje ugovora bez početnih ulaganja. Brza isporuka vozila prema dogovoru.',
              },
              {
                n: '02', title: 'Brzo',
                body: 'Brzo sklapanje ugovora i isporuka vozila. Bez dugih čekanja i birokracije.',
              },
              {
                n: '03', title: 'Bez dodatnih troškova',
                body: 'Svi troškovi vozila osim goriva uključeni su u cijenu najma. Nema iznenađenja.',
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

      {/* INCLUDES TICKER */}
      <div className="includes-strip">
        <div className="includes-inner">
          {[...includesItems, ...includesItems].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <div className="section-label">Kako funkcionira</div>
        <h2 className="section-h2">Tri koraka<br />do vozila</h2>
        <div className="how-grid">
          {[
            {
              n: '01', title: 'Definirajte potrebe',
              body: 'Recite nam kakvo vozilo trebate — vrstu, veličinu, period najma. Savjetujemo vas koje vozilo je optimalno za vaš slučaj.',
            },
            {
              n: '02', title: 'Dogovaramo uvjete',
              body: 'Izradimo personalnu ponudu s fiksnom mjesečnom ratom. Ugovor sklapamo brzo, bez nepotrebnih čekanja.',
            },
            {
              n: '03', title: 'Vozilo je vaše',
              body: 'Vozilo preuzimate odmah po potpisu ugovora. Na kraju perioda možete produžiti, zamijeniti ili otkupiti vozilo.',
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

      {/* WHAT'S INCLUDED */}
      <section className="included-section">
        <div className="included-inner">
          <div className="included-header">
            <h2 className="included-h2">Što je<br />uključeno</h2>
            <p className="included-lead">
              Fiksna mjesečna rata pokriva sve troškove posjedovanja vozila.
              Jedino što plaćate odvojeno je gorivo — sve ostalo je na nama.
            </p>
          </div>
          <div className="included-grid">
            {[
              { title: 'Osiguranje od odgovornosti', body: 'Potpuno pokriće od autocasco i obaveznog osiguranja prema trećim osobama.' },
              { title: 'Kasko osiguranje',           body: 'Zaštita vozila od oštećenja, krađe i nepredviđenih situacija.' },
              { title: 'Redovni servis',             body: 'Svi servisni intervali, ulje, filteri i potrošni materijal prema preporuci proizvođača.' },
              { title: 'Tehnički pregled',           body: 'Troškovi tehničkog pregleda i sve propisane provjere vozila.' },
              { title: 'Gume i zamjena',             body: 'Sezonska zamjena guma i troškovi seta zimskih i ljetnih guma.' },
              { title: 'Opcija otkupa',              body: 'Po isteku ugovora možete otkupiti vozilo po unaprijed ugovorenoj vrijednosti.' },
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

      {/* PERIODS */}
      <section className="periods-section">
        <div className="periods-inner">
          <h2 className="periods-h2">Periodi najma</h2>
          <div className="periods-row">
            <div className="period-card">
              <div className="period-duration">15–30</div>
              <div className="period-unit">Dana</div>
              <div className="period-desc">Kratkoročni najam za privremene potrebe ili testiranje vozila.</div>
            </div>
            <div className="period-card">
              <div className="period-duration">1–12</div>
              <div className="period-unit">Mjeseci</div>
              <div className="period-desc">Fleksibilni srednji period — idealan za projekte i sezonske potrebe.</div>
            </div>
            <div className="period-card featured">
              <div className="period-badge">Najpopularnije</div>
              <div className="period-duration">12–36</div>
              <div className="period-unit">Mjeseci</div>
              <div className="period-desc">Optimalan omjer cijene i fleksibilnosti za privatne i poslovne korisnike.</div>
            </div>
            <div className="period-card">
              <div className="period-duration">36–60</div>
              <div className="period-unit">Mjeseci</div>
              <div className="period-desc">Dugoročni najam s najnižom mogućom ratom i svim uslugama uključenim.</div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECT CONTACT */}
      <section className="cta-section" id="kontakt-forma">
        <div className="cta-inner">
          <div>
            <h2 className="cta-h2">Kontaktirajte nas</h2>
            <p className="cta-sub">
              Za ponudu prilagođenu vašim potrebama, javite nam se direktno.
              Odgovaramo brzo i rado ćemo vam pomoći da odaberete najbolje rješenje.
            </p>
          </div>
          <div className="cta-contact-card">
            <a className="cta-contact-item" href="tel:+38512345678">
              <span className="cta-contact-label">Telefon</span>
              <strong>+385 12 345 678</strong>
            </a>
            <a className="cta-contact-item" href="mailto:info@rikverc.hr">
              <span className="cta-contact-label">E-mail</span>
              <strong>info@rikverc.hr</strong>
            </a>
            <a className="cta-contact-item" href="https://maps.google.com/?q=Hangar+17" target="_blank" rel="noreferrer">
              <span className="cta-contact-label">Lokacija</span>
              <strong>Zagreb, Hrvatska</strong>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
