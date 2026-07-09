'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Vehicle } from '@/lib/vehicles'

export default function VehicleList({ vehicles }: { vehicles: Vehicle[] }) {
  const [filterBrand,  setFilterBrand]  = useState('')
  const [filterFuel,   setFilterFuel]   = useState('')
  const [filterSort,   setFilterSort]   = useState('')
  const [activeStatus, setActiveStatus] = useState('all')

  const brands = [...new Set(vehicles.map((v) => v.brand))].sort()

  const filtered = useMemo(() => {
    let list = vehicles.filter((v) => {
      if (filterBrand && v.brand !== filterBrand) return false
      if (filterFuel  && v.fuel  !== filterFuel)  return false
      if (activeStatus !== 'all' && v.status !== activeStatus) return false
      return true
    })
    if (filterSort === 'price-asc')  list = [...list].sort((a, b) => a.price - b.price)
    if (filterSort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
    if (filterSort === 'year-desc')  list = [...list].sort((a, b) => b.year  - a.year)
    if (filterSort === 'km-asc')     list = [...list].sort((a, b) => a.km    - b.km)
    return list
  }, [vehicles, filterBrand, filterFuel, filterSort, activeStatus])

  const hasDostupno = filtered.some((v) => v.status === 'dostupno')
  const hasProdano  = filtered.some((v) => v.status === 'prodano')

  return (
    <>
      {/* FILTER BAR */}
      <div className="filter-bar">
        <div className="filter-inner">
          <select className="filter-select" value={filterBrand} onChange={(e) => setFilterBrand(e.target.value)}>
            <option value="">Sve marke</option>
            {brands.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>

          <select className="filter-select" value={filterFuel} onChange={(e) => setFilterFuel(e.target.value)}>
            <option value="">Svi motori</option>
            <option value="Benzin">Benzin</option>
            <option value="Diesel">Diesel</option>
            <option value="Električni">Električni</option>
          </select>

          <select className="filter-select" value={filterSort} onChange={(e) => setFilterSort(e.target.value)}>
            <option value="">Sortiraj</option>
            <option value="price-asc">Cijena: rastuće</option>
            <option value="price-desc">Cijena: padajuće</option>
            <option value="year-desc">Najnovije</option>
            <option value="km-asc">Najmanji km</option>
          </select>

          <div className="filter-divider" />

          <div className="filter-chips">
            {(['all', 'dostupno', 'prodano'] as const).map((v) => (
              <button
                key={v}
                className={`chip${v === 'all' ? ' red-chip' : ''}${activeStatus === v ? ' active' : ''}`}
                onClick={() => setActiveStatus(v)}
              >
                {v === 'all' ? 'Sve' : v === 'dostupno' ? 'Dostupno' : 'Prodano'}
              </button>
            ))}
          </div>

          <div className="filter-count">
            Prikazano: <span>{filtered.length}</span> vozila
          </div>
        </div>
      </div>

      {/* LISTINGS */}
      <section className="listings-section">
        <div className="listings-grid">
          {hasDostupno && (
            <div className="grid-label">
              <span className="grid-label-text">Dostupno</span>
              <div className="grid-label-line" />
            </div>
          )}
          {filtered.filter((v) => v.status === 'dostupno').map((v) => (
            <VehicleCard key={v.id} vehicle={v} />
          ))}

          {hasProdano && (
            <div className="grid-label">
              <span className="grid-label-text">Prodano</span>
              <div className="grid-label-line" />
            </div>
          )}
          {filtered.filter((v) => v.status === 'prodano').map((v) => (
            <VehicleCard key={v.id} vehicle={v} />
          ))}

          {filtered.length === 0 && (
            <div className="no-results">
              <p>Nema vozila koja odgovaraju odabranim filterima.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

function VehicleCard({ vehicle: v }: { vehicle: Vehicle }) {
  const coverImg = v.images[0]
  return (
    <Link href={`/rabljena-vozila/${v.slug}`} className={`vehicle-card${v.status === 'prodano' ? ' sold' : ''}`} style={{ display: 'block', textDecoration: 'none' }}>
      <div className="card-thumb">
        {coverImg?.url
          ? <Image src={coverImg.url} alt={coverImg.alt} width={400} height={200} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : <CarPlaceholder name={v.title} />
        }
        <span className={`status-badge ${v.status === 'dostupno' ? 'badge-dostupno' : 'badge-prodano'}`}>
          {v.status === 'dostupno' ? 'Dostupno' : 'Prodano'}
        </span>
      </div>
      <div className="card-body">
        <div className="card-title">{v.title}</div>
        <div className="card-variant">{v.variant}</div>
        <div className="card-specs">
          {[v.year.toString(), `${v.km.toLocaleString('hr-HR')} km`, v.fuel, v.transmission.split(' ')[0]].map((s) => (
            <span key={s} className="spec-tag">{s}</span>
          ))}
        </div>
        <div className="card-footer">
          <div className={`card-price${v.status === 'prodano' ? ' sold-price' : ''}`}>{v.priceDisplay}</div>
          <span className="card-cta">
            {v.status === 'dostupno' ? 'Detalji' : 'Prodano'}
          </span>
        </div>
      </div>
    </Link>
  )
}

function CarPlaceholder({ name }: { name: string }) {
  return (
    <div className="card-thumb-placeholder">
      <svg viewBox="0 0 64 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 22h56M6 22l8-12h28l8 12" />
        <circle cx="16" cy="25" r="3" /><circle cx="48" cy="25" r="3" />
      </svg>
      <span>{name}</span>
    </div>
  )
}
