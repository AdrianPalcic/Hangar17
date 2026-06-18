import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VehicleDetail from './VehicleDetail'
import { ALL_VEHICLES, getVehicleBySlug, Vehicle } from '@/lib/vehicles'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ slug: string }> }

const sanityConfigured =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'your-project-id'

export async function generateStaticParams() {
  if (sanityConfigured) {
    try {
      const { client } = await import('@/sanity/lib/client')
      const { ALL_VEHICLE_SLUGS_QUERY } = await import('@/sanity/lib/queries')
      const slugs: { slug: string }[] = await client.fetch(ALL_VEHICLE_SLUGS_QUERY)
      return slugs.map((s) => ({ slug: s.slug }))
    } catch {
      // fall through to static
    }
  }
  return ALL_VEHICLES.map((v) => ({ slug: v.slug }))
}

async function fetchVehicle(slug: string): Promise<Vehicle | undefined> {
  if (sanityConfigured) {
    try {
      const { client } = await import('@/sanity/lib/client')
      const { VEHICLE_BY_SLUG_QUERY } = await import('@/sanity/lib/queries')
      const data = await client.fetch(VEHICLE_BY_SLUG_QUERY, { slug })
      if (!data) return getVehicleBySlug(slug)
      return {
        id: 0,
        slug: data.slug,
        brand: data.brand ?? '',
        model: data.model ?? '',
        title: data.title ?? '',
        variant: data.variant ?? '',
        year: data.year ?? 0,
        firstReg: data.firstReg ?? '',
        price: data.price ?? 0,
        priceDisplay: data.priceDisplay ?? 'Na upit',
        km: data.km ?? 0,
        status: data.status ?? 'dostupno',
        fuel: data.fuel ?? '',
        transmission: data.transmission ?? '',
        power: data.power ?? '',
        displacement: data.displacement ?? '',
        color: data.color ?? '',
        bodyType: data.bodyType ?? '',
        doors: data.doors ?? 0,
        seats: data.seats ?? 0,
        drive: data.drive ?? '',
        vatIncluded: data.vatIncluded ?? false,
        warranty: data.warranty,
        description: data.description ?? '',
        equipment: data.equipment ?? [],
        images: (data.images ?? []).map((img: { url: string; alt: string }) => ({
          url: img.url ?? null,
          alt: img.alt ?? '',
        })),
      }
    } catch {
      // fall through to static
    }
  }
  return getVehicleBySlug(slug)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const v = await fetchVehicle(slug)
  if (!v) return {}
  return {
    title: `${v.title} ${v.year} | Hangar 17`,
    description: `${v.variant} · ${v.km.toLocaleString('hr-HR')} km · ${v.priceDisplay}. ${v.description.slice(0, 120)}…`,
  }
}

export default async function VehiclePage({ params }: Props) {
  const { slug } = await params
  const vehicle = await fetchVehicle(slug)
  if (!vehicle) notFound()

  return (
    <>
      <Header />
      <VehicleDetail vehicle={vehicle} />
      <Footer />
    </>
  )
}
