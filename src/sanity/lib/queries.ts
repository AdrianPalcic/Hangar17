import { groq } from 'next-sanity'

export const ALL_VEHICLES_QUERY = groq`
  *[_type == "vehicle"] | order(_createdAt desc) {
    _id,
    "slug": slug.current,
    "brand": brand->name,
    model,
    title,
    variant,
    year,
    firstReg,
    price,
    priceDisplay,
    km,
    status,
    fuel,
    transmission,
    power,
    displacement,
    color,
    bodyType,
    doors,
    seats,
    drive,
    vatIncluded,
    warranty,
    description,
    equipment,
    "images": images[] {
      "url": asset->url,
      "alt": coalesce(alt, ""),
    },
  }
`

export const VEHICLE_BY_SLUG_QUERY = groq`
  *[_type == "vehicle" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    "brand": brand->name,
    model,
    title,
    variant,
    year,
    firstReg,
    price,
    priceDisplay,
    km,
    status,
    fuel,
    transmission,
    power,
    displacement,
    color,
    bodyType,
    doors,
    seats,
    drive,
    vatIncluded,
    warranty,
    description,
    equipment,
    "images": images[] {
      "url": asset->url,
      "alt": coalesce(alt, ""),
    },
  }
`

export const ALL_VEHICLE_SLUGS_QUERY = groq`
  *[_type == "vehicle"] { "slug": slug.current }
`
