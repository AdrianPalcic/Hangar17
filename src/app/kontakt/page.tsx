'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function KontaktPage() {
  const [loading,   setLoading]   = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <>
      <Header />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>Kontakt</h1>
          <p>Slobodno nam se obratite za sva pitanja o vozilima, uvozima ili najmu. Tu smo radnim danima i subotom.</p>
        </div>
      </section>

      {/* MAIN CONTACT */}
      <div className="contact-main">
        {/* FORM */}
        <div className="form-wrap">
          <h2>Pošaljite upit</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fname">Ime</label>
                <input type="text" id="fname" placeholder="Vaše ime" required />
              </div>
              <div className="form-group">
                <label htmlFor="lname">Prezime</label>
                <input type="text" id="lname" placeholder="Vaše prezime" />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="vas@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                <input type="tel" id="phone" placeholder="+385 91 ..." />
              </div>
              <div className="form-group full">
                <label htmlFor="topic">Tema upita</label>
                <div className="form-select-wrap">
                  <select id="topic">
                    <option value="">Odaberite temu...</option>
                    <option value="prodaja">Prodaja vozila</option>
                    <option value="narudzba">Uvoz po narudžbi</option>
                    <option value="najam">Najam vozila</option>
                    <option value="detailing">Detailing</option>
                    <option value="ostalo">Ostalo</option>
                  </select>
                </div>
              </div>
              <div className="form-group full">
                <label htmlFor="message">Poruka</label>
                <textarea id="message" placeholder="Opišite što vas zanima..." />
              </div>
            </div>
            <button
              type="submit"
              className="form-submit"
              disabled={loading || submitted}
            >
              {submitted ? 'Poslano ✓' : loading ? 'Slanje...' : 'Pošaljite poruku'}
            </button>
            <p className="form-note">Odgovaramo unutar jednog radnog dana.</p>
            <div className={`form-success${submitted ? ' show' : ''}`}>
              Vaša poruka je uspješno poslana. Javit ćemo vam se uskoro!
            </div>
          </form>
        </div>

        {/* INFO SIDEBAR */}
        <aside className="info-sidebar">
          <div className="info-block">
            <div className="info-label">Adresa</div>
            <div className="info-value">Šandora Brešćenskog 17<br />10410 Pleso</div>
          </div>
          <div className="info-block">
            <div className="info-label">Telefon</div>
            <div className="info-value">
              <a href="tel:+385916309076">+385 91 6309 076</a>
            </div>
          </div>
          <div className="info-block">
            <div className="info-label">E-mail</div>
            <div className="info-value">
              <a href="mailto:info@hangar17.hr">info@hangar17.hr</a>
            </div>
          </div>

          <div className="info-divider" />

          <div className="info-block">
            <div className="info-label">Radno vrijeme</div>
            <div>
              <div className="hours-row">
                <span className="hours-day">Pon – Pet</span>
                <span className="hours-time">09:00 – 17:00</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">Subota</span>
                <span className="hours-time">Po dogovoru</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">Nedjelja i praznici</span>
                <span className="hours-closed">Ne radimo</span>
              </div>
            </div>
          </div>

          <div className="map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.1!2d16.0720!3d45.7445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d52f7c5e9c5b%3A0x0!2sSandora+Brescenskog+17%2C+Pleso!5e0!3m2!1shr!2shr!4v1699000000000!5m2!1shr!2shr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hangar 17 lokacija"
            />
          </div>
        </aside>
      </div>

      {/* QUICK LINKS */}
      <div className="quick-links">
        <div className="quick-links-inner">
          <Link href="/rabljena-vozila" className="quick-card">
            <div className="quick-card-label">Ponuda</div>
            <div className="quick-card-title">Rabljena vozila</div>
            <div className="quick-card-body">Pregledajte trenutnu ponudu naših vozila.</div>
            <span className="quick-card-link">Pogledaj ponudu →</span>
          </Link>
          <Link href="/rabljena-vozila#narudzba" className="quick-card">
            <div className="quick-card-label">Uvoz</div>
            <div className="quick-card-title">Vozila po narudžbi</div>
            <div className="quick-card-body">Uvozimo vozila iz cijele EU prema vašim željama i specifikacijama.</div>
            <span className="quick-card-link">Saznaj više →</span>
          </Link>
          <Link href="/najam" className="quick-card">
            <div className="quick-card-label">Najam</div>
            <div className="quick-card-title">Dugoročni najam</div>
            <div className="quick-card-body">Fiksna mjesečna rata s uključenim svim troškovima osim goriva. Periodi od 30 dana do 60 mjeseci.</div>
            <span className="quick-card-link">Saznaj više →</span>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}
