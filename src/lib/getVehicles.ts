import { ALL_VEHICLES, Vehicle } from '@/lib/vehicles'

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

export async function getVehicles(): Promise<Vehicle[]> {
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
