import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VehicleList from './VehicleList'
import { ALL_VEHICLES } from '@/lib/vehicles'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Prodaja vozila | Hangar 17',
  description: 'Pažljivo odabrana rabljena vozila različitih marki i modela. Svaki automobil prolazi detaljnu tehničku kontrolu.',
}

async function getVehicles() {
  const sanityConfigured =
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'your-project-id'

  if (sanityConfigured) {
    try {
      const { client } = await import('@/sanity/lib/client')
      const { ALL_VEHICLES_QUERY } = await import('@/sanity/lib/queries')
      const data = await client.fetch(ALL_VEHICLES_QUERY)
      if (!data?.length) return ALL_VEHICLES
      return data.map((v: SanityVehicleItem, i: number) => ({
        id: i + 1,
        slug: typeof v.slug === 'string' ? v.slug : v.slug.current,
        brand: v.brand ?? '',
        model: v.model ?? '',
        title: v.title ?? '',
        variant: v.variant ?? '',
        year: v.year ?? 0,
        firstReg: v.firstReg ?? '',
        price: v.price ?? 0,
        priceDisplay: v.priceDisplay ?? 'Na upit',
        km: v.km ?? 0,
        status: v.status ?? 'dostupno',
        fuel: v.fuel ?? '',
        transmission: v.transmission ?? '',
        power: v.power ?? '',
        displacement: v.displacement ?? '',
        color: v.color ?? '',
        bodyType: v.bodyType ?? '',
        doors: v.doors ?? 0,
        seats: v.seats ?? 0,
        drive: v.drive ?? '',
        vatIncluded: v.vatIncluded ?? false,
        warranty: v.warranty,
        description: v.description ?? '',
        equipment: v.equipment ?? [],
        images: (v.images ?? []).map((img: { url: string; alt: string }) => ({
          url: img.url ?? null,
          alt: img.alt ?? '',
        })),
      }))
    } catch (err) {
      console.error('Sanity fetch failed, falling back to static data:', err)
    }
  }

  return ALL_VEHICLES
}

type SanityVehicleItem = {
  slug: { current: string } | string
  brand: string
  model: string
  title: string
  variant: string
  year: number
  firstReg: string
  price: number
  priceDisplay: string
  km: number
  status: 'dostupno' | 'prodano'
  fuel: string
  transmission: string
  power: string
  displacement: string
  color: string
  bodyType: string
  doors: number
  seats: number
  drive: string
  vatIncluded: boolean
  warranty?: string
  description: string
  equipment: string[]
  images: { url: string; alt: string }[]
}

export default async function RabljenVozilaPage() {
  const vehicles = await getVehicles()

  return (
    <>
      <Header />

      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>Prodaja<br />vozila</h1>
          <p>
            Pažljivo odabrana vozila. Svaki automobil prolazi detaljnu kontrolu.
            Kliknite na vozilo za više informacija.
          </p>
        </div>
      </section>

      <VehicleList vehicles={vehicles} />

      <div className="divider-banner">
        <h2>Uvozimo po narudžbi iz cijele EU</h2>
      </div>

      <section className="narudzba-section" id="narudzba">
        <div className="narudzba-inner">
          <div className="narudzba-header">
            <h2 className="narudzba-title">Vozila po<br />narudžbi</h2>
            <p className="narudzba-intro">
              Kao stručnjaci za uvoz vozila, naš tim omogućuje vam pristup
              širokom asortimanu automobila iz svih zemalja EU.
            </p>
          </div>

          <div className="benefits-grid">
            {[
              { n: '01 — Izbor',    title: 'Široka ponuda vozila iz zemalja EU',            items: ['Pronalazimo vozilo prema vašim željama i potrebama', 'Pretražujemo tržište unutar europske unije'] },
              { n: '02 — Ušteda',   title: 'Ušteda vremena i novca',                        items: ['Pronalazimo vozilo prema vašim željama po najnižoj cijeni', 'Bez skrivenih troškova — unaprijed izračunavamo sve (PPMV, transport)'] },
              { n: '03 — Provjera', title: 'Stručna provjera i kvaliteta',                  items: ['Temeljita provjera tehničkog stanja, servisne povijesti i dokumentacije', 'Fotodokumentacija i video provjera prije kupnje'] },
              { n: '04 — Proces',   title: 'Kompletan proces kupovine automobila',          items: ['Pronalazak, pregled i testiranje vozila', 'Siguran transport s osiguranjem', 'Carinska obrada, homologacija i registracija u RH'] },
            ].map(({ n, title, items }) => (
              <div key={n} className="benefit-item">
                <div className="benefit-num">{n}</div>
                <div className="benefit-title">{title}</div>
                <div className="benefit-body"><ul>{items.map((it) => <li key={it}>{it}</li>)}</ul></div>
              </div>
            ))}
          </div>

          <div className="steps-wrap">
            <div className="steps-label">Kako funkcionira</div>
            <div className="steps-row">
              {[
                { n: '01', label: 'Definirajte\nželje' },
                { n: '02', label: 'Pronalazak\ni analiza' },
                { n: '03', label: 'Konačna\nprovjera' },
                { n: '04', label: 'Organizacija\ntransporta' },
                { n: '05', label: 'Papirologija\ni predaja' },
              ].map(({ n, label }) => (
                <div key={n} className="step-item">
                  <div className="step-n">{n}</div>
                  <div className="step-title">{label.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="narudzba-cta">
            <p><strong>Kontaktirajte nas danas</strong> i recite nam koji automobil tražite.</p>
            <a href="mailto:info@hangar17.hr" className="cta-btn">Obratite nam se!</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
