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
            Zamijenite troškove kupnje vozila predviđenom mjesečnom ratom.
            Vozilo po vašim potrebama, bez početnog ulaganja i skrivenih troškova.
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
                body: 'Brzo sklapanje ugovora i isporuka vozila. Bez dugih čekanja i administracije.',
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
              { title: 'Osiguranje od odgovornosti', body: 'Potpuno pokriće prema trećim osobama.' },
              { title: 'Kasko osiguranje',           body: 'Zaštita od oštećenja, krađe i ostalih nepredviđenih situacija.' },
              { title: 'Redovno održavanje',         body: 'Svi redovni servisi po uputama proizvođača.' },
              { title: 'Registracija vozila',        body: 'Trošak tehničkog pregleda i registracije vozila.' },
              { title: 'Gume i zamjena',             body: 'Sezonska zamjena guma.' },
              { title: 'Opcija otkupa vozila',       body: 'Mogućnost otkupa vozila po završetku najma.' },
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
              <div className="period-duration">30–60</div>
              <div className="period-unit">Dana</div>
              <div className="period-desc">Kratkoročni period za privremene potrebe.</div>
            </div>
            <div className="period-card">
              <div className="period-duration">2–6</div>
              <div className="period-unit">Mjeseci</div>
              <div className="period-desc">Srednjoročni period za projekte i sezonske potrebe.</div>
            </div>
            <div className="period-card featured">
              <div className="period-badge">Najpopularnije</div>
              <div className="period-duration">6–36</div>
              <div className="period-unit">Mjeseci</div>
              <div className="period-desc">Optimalan omjer cijene i fleksibilnosti za privatne i poslovne korisnike.</div>
            </div>
            <div className="period-card">
              <div className="period-duration">36–60</div>
              <div className="period-unit">Mjeseci</div>
              <div className="period-desc">Dugoročni najam s najnižom mogućom ratom.</div>
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
