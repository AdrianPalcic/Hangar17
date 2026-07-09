'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Vehicle, VehicleImage } from '@/lib/vehicles'

function GallerySlot({ img, active }: { img: VehicleImage; active?: boolean }) {
  if (img.url) {
    return (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image src={img.url} alt={img.alt} fill style={{ objectFit: 'cover' }} />
      </div>
    )
  }
  return (
    <div className={`gallery-placeholder${active ? ' gallery-placeholder--active' : ''}`}>
      <svg width="72" height="36" viewBox="0 0 72 36" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M4 26h64M7 26l10-14h34l10 14" />
        <circle cx="18" cy="29" r="3.5" />
        <circle cx="54" cy="29" r="3.5" />
        <path d="M30 12h12" />
      </svg>
      <span>{img.alt}</span>
    </div>
  )
}

function Lightbox({
  images, current, onClose, onPrev, onNext,
}: {
  images: VehicleImage[]
  current: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>✕</button>

        <div className="lightbox-main">
          <button className="lightbox-arrow lightbox-arrow--prev" onClick={onPrev}>‹</button>
          <div className="lightbox-img">
            <GallerySlot img={images[current]} active />
          </div>
          <button className="lightbox-arrow lightbox-arrow--next" onClick={onNext}>›</button>
        </div>

        <div className="lightbox-counter">{current + 1} / {images.length}</div>

        <div className="lightbox-thumbs">
          {images.map((img, i) => (
            <button
              key={i}
              className={`lightbox-thumb${i === current ? ' lightbox-thumb--active' : ''}`}
              onClick={() => { /* parent controls index */ }}
            >
              <GallerySlot img={img} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function InquiryModal({ title, onClose }: { title: string; onClose: () => void }) {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  function submit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setDone(true); setTimeout(onClose, 2500) }, 800)
  }

  return (
    <div className="modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-title">Upit za: {title}</div>
        <form onSubmit={submit}>
          <div className="modal-form-row">
            <div className="modal-group">
              <label className="modal-label">Ime</label>
              <input className="modal-input" type="text" placeholder="Vaše ime" required />
            </div>
            <div className="modal-group">
              <label className="modal-label">Telefon</label>
              <input className="modal-input" type="tel" placeholder="+385 91 ..." />
            </div>
          </div>
          <div className="modal-group">
            <label className="modal-label">Poruka</label>
            <textarea className="modal-textarea" rows={3} placeholder="Pitanje o vozilu..." />
          </div>
          {done
            ? <div className="modal-success show">Poruka poslana ✓</div>
            : <button type="submit" className="modal-submit" disabled={loading}>{loading ? 'Slanje...' : 'Pošalji upit'}</button>
          }
        </form>
      </div>
    </div>
  )
}

export default function VehicleDetail({ vehicle: v }: { vehicle: Vehicle }) {
  const [activeImg, setActiveImg]       = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [inquiryOpen, setInquiryOpen]   = useState(false)

  const prev = useCallback(() => setActiveImg((i) => (i - 1 + v.images.length) % v.images.length), [v.images.length])
  const next = useCallback(() => setActiveImg((i) => (i + 1) % v.images.length), [v.images.length])

  const specRows = [
    { label: 'Godište',           value: v.year.toString() },
    { label: 'Prva registracija', value: v.firstReg },
    { label: 'Kilometraža',       value: `${v.km.toLocaleString('hr-HR')} km` },
    { label: 'Motor',             value: v.fuel },
    { label: 'Zapremnina',        value: v.displacement },
    { label: 'Snaga',             value: v.power },
    { label: 'Mjenjač',           value: v.transmission },
    { label: 'Pogon',             value: v.drive },
    { label: 'Boja',              value: v.color },
    { label: 'Tip karoserije',    value: v.bodyType },
    { label: 'Broj vrata',        value: v.doors.toString() },
    { label: 'Broj sjedala',      value: v.seats.toString() },
    { label: 'Vozilo u sustavu PDV-a', value: v.vatIncluded ? 'Da' : 'Ne' },
    ...(v.warranty ? [{ label: 'Jamstvo', value: v.warranty }] : []),
  ]

  return (
    <>
      {/* BREADCRUMB */}
      <div className="vd-breadcrumb">
        <div className="vd-breadcrumb-inner">
          <Link href="/rabljena-vozila">← Sva vozila</Link>
          <span>/</span>
          <span>{v.title}</span>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="vd-page">
        <div className="vd-page-inner">

          {/* LEFT */}
          <div className="vd-left">

            {/* GALLERY */}
            <div className="vd-gallery">
              <div className="vd-gallery-main" onClick={() => setLightboxOpen(true)}>
                <GallerySlot img={v.images[activeImg]} active />
                <button className="vd-gallery-fullscreen">⤢ Fullscreen</button>
                <span className={`status-badge ${v.status === 'dostupno' ? 'badge-dostupno' : 'badge-prodano'}`}>
                  {v.status === 'dostupno' ? 'Dostupno' : 'Prodano'}
                </span>
              </div>

              <div className="vd-thumbs">
                {v.images.map((img, i) => (
                  <button
                    key={i}
                    className={`vd-thumb${i === activeImg ? ' vd-thumb--active' : ''}`}
                    onClick={() => setActiveImg(i)}
                  >
                    <GallerySlot img={img} />
                  </button>
                ))}
              </div>
            </div>

            {/* OPIS */}
            <div className="vd-section">
              <h2 className="vd-section-title">Opis</h2>
              <p className="vd-description">{v.description}</p>
            </div>

            {/* SPECIFIKACIJE */}
            <div className="vd-section">
              <h2 className="vd-section-title">Tehničke specifikacije</h2>
              <div className="vd-specs-table">
                {specRows.map(({ label, value }) => (
                  <div key={label} className="vd-spec-row">
                    <span className="vd-spec-label">{label}</span>
                    <span className="vd-spec-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* OPREMA */}
            <div className="vd-section">
              <h2 className="vd-section-title">Oprema i dodaci</h2>
              <ul className="vd-equipment-list">
                {v.equipment.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT */}
          <div className="vd-right">
            <div className="vd-sidebar">
              <div className="vd-sidebar-head">
                <div className="vd-sidebar-brand">{v.brand}</div>
                <h1 className="vd-sidebar-title">{v.model}</h1>
                <p className="vd-sidebar-variant">{v.variant}</p>
              </div>

              <div className="vd-price-block">
                <div className="vd-price">{v.priceDisplay}</div>
                {v.vatIncluded && <div className="vd-price-note">Vozilo u sustavu PDV-a</div>}
              </div>

              <div className="vd-key-specs">
                {[
                  { icon: '📅', label: v.year.toString() },
                  { icon: '⏱', label: `${v.km.toLocaleString('hr-HR')} km` },
                  { icon: '⛽', label: v.fuel },
                  { icon: '⚙️', label: v.transmission.split(' ')[0] },
                ].map(({ icon, label }) => (
                  <div key={label} className="vd-key-spec">
                    <span className="vd-key-spec-icon">{icon}</span>
                    <span className="vd-key-spec-label">{label}</span>
                  </div>
                ))}
              </div>

              {v.status === 'dostupno' ? (
                <>
                  <button className="vd-cta-primary" onClick={() => setInquiryOpen(true)}>
                    Pošalji upit
                  </button>
                  <a className="vd-cta-secondary" href="tel:+385916309076">
                    +385 91 6309 076
                  </a>
                </>
              ) : (
                <div className="vd-sold-notice">
                  <strong>Vozilo prodano</strong>
                  <p>Tražite slično? Kontaktirajte nas — pronalazimo vozila po narudžbi.</p>
                  <Link href="/rabljena-vozila#narudzba" className="vd-cta-secondary">Vozila po narudžbi</Link>
                </div>
              )}

              {v.warranty && (
                <div className="vd-warranty">
                  <span className="vd-warranty-icon">🛡</span>
                  <span>Tvorničko jamstvo {v.warranty}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={v.images}
          current={activeImg}
          onClose={() => setLightboxOpen(false)}
          onPrev={prev}
          onNext={next}
        />
      )}

      {inquiryOpen && (
        <InquiryModal title={`${v.title} ${v.year}`} onClose={() => setInquiryOpen(false)} />
      )}
    </>
  )
}
