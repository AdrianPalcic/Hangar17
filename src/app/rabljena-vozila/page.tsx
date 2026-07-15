import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VehicleList from './VehicleList'
import { getVehicles } from '@/lib/getVehicles'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Prodaja vozila | Hangar 17',
  description: 'Pažljivo odabrana rabljena vozila različitih marki i modela. Svaki automobil prolazi detaljnu tehničku kontrolu.',
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
