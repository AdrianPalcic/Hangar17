import { defineField, defineType } from 'sanity'

export const vehicleType = defineType({
  name: 'vehicle',
  title: 'Vozilo',
  type: 'document',
  groups: [
    { name: 'osnovno',     title: 'Osnovno' },
    { name: 'tehnicko',    title: 'Tehničke specifikacije' },
    { name: 'opis',        title: 'Opis i oprema' },
    { name: 'galerija',    title: 'Galerija' },
  ],
  fields: [
    /* ── OSNOVNO ── */
    defineField({
      name: 'title', title: 'Naziv vozila',
      type: 'string', group: 'osnovno',
      description: 'Npr. "BMW 420d xDrive Gran Coupé"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug', title: 'URL slug',
      type: 'slug', group: 'osnovno',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'brand', title: 'Marka',
      type: 'string', group: 'osnovno',
      options: {
        list: ['BMW','Audi','Mercedes','Porsche','VW','MINI','Škoda','Toyota','Ford','Opel','Renault','Peugeot','Volvo','Lexus','Drugo'],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'model', title: 'Model',
      type: 'string', group: 'osnovno',
      description: 'Npr. "420d xDrive Gran Coupé"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'variant', title: 'Varijanta / kratki opis',
      type: 'string', group: 'osnovno',
      description: 'Npr. "LCI M Sport · Brooklyn Grau" — prikazuje se ispod naslova kartice',
    }),
    defineField({
      name: 'status', title: 'Status',
      type: 'string', group: 'osnovno',
      options: {
        list: [
          { title: 'Dostupno', value: 'dostupno' },
          { title: 'Prodano',  value: 'prodano'  },
          { title: 'Rezervirano', value: 'rezervirano' },
        ],
        layout: 'radio',
      },
      initialValue: 'dostupno',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'price', title: 'Cijena (€)',
      type: 'number', group: 'osnovno',
      description: 'Numerička vrijednost za filtriranje',
    }),
    defineField({
      name: 'priceDisplay', title: 'Prikaz cijene',
      type: 'string', group: 'osnovno',
      description: 'Npr. "48.900 €" ili "Na upit"',
      validation: (r) => r.required(),
    }),

    /* ── TEHNICKE SPECIFIKACIJE ── */
    defineField({
      name: 'year', title: 'Godište',
      type: 'number', group: 'tehnicko',
      validation: (r) => r.required().min(1900).max(2030),
    }),
    defineField({
      name: 'firstReg', title: 'Prva registracija',
      type: 'string', group: 'tehnicko',
      description: 'Npr. "09/2023"',
    }),
    defineField({
      name: 'km', title: 'Kilometraža',
      type: 'number', group: 'tehnicko',
      validation: (r) => r.required().min(0),
    }),
    defineField({
      name: 'fuel', title: 'Gorivo',
      type: 'string', group: 'tehnicko',
      options: {
        list: ['Benzin', 'Diesel', 'Električni', 'Hibrid (Plug-in)', 'Hibrid (Blagi)', 'LPG', 'Vodik'],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'transmission', title: 'Mjenjač',
      type: 'string', group: 'tehnicko',
      description: 'Npr. "Automatik (8-stupanjski)"',
    }),
    defineField({
      name: 'power', title: 'Snaga',
      type: 'string', group: 'tehnicko',
      description: 'Npr. "140 kW / 190 KS"',
    }),
    defineField({
      name: 'displacement', title: 'Zapremina / baterija',
      type: 'string', group: 'tehnicko',
      description: 'Npr. "1.995 ccm" ili "77 kWh"',
    }),
    defineField({
      name: 'drive', title: 'Pogon',
      type: 'string', group: 'tehnicko',
      options: {
        list: ['FWD', 'RWD', 'AWD (xDrive)', 'AWD (Quattro)', 'AWD (4Motion)', 'AWD (ALL4)', 'AWD (PDK)', 'AWD (PTM)', 'AWD'],
      },
    }),
    defineField({
      name: 'color', title: 'Boja',
      type: 'string', group: 'tehnicko',
    }),
    defineField({
      name: 'bodyType', title: 'Tip karoserije',
      type: 'string', group: 'tehnicko',
      options: {
        list: ['Limuzina', 'Hatchback', 'Karavan', 'SUV', 'Coupé', 'Gran Coupé', 'Cabrio', 'Roadster', 'Van', 'Pick-up'],
      },
    }),
    defineField({
      name: 'doors', title: 'Broj vrata',
      type: 'number', group: 'tehnicko',
    }),
    defineField({
      name: 'seats', title: 'Broj sjedala',
      type: 'number', group: 'tehnicko',
    }),
    defineField({
      name: 'vatIncluded', title: 'PDV uključen',
      type: 'boolean', group: 'tehnicko',
      initialValue: false,
    }),
    defineField({
      name: 'warranty', title: 'Jamstvo',
      type: 'string', group: 'tehnicko',
      description: 'Npr. "Do 09/2026" — ostavite prazno ako nema jamstva',
    }),

    /* ── OPIS I OPREMA ── */
    defineField({
      name: 'description', title: 'Opis vozila',
      type: 'text', group: 'opis',
      rows: 5,
    }),
    defineField({
      name: 'equipment', title: 'Oprema i dodaci',
      type: 'array', group: 'opis',
      of: [{ type: 'string' }],
      description: 'Svaki unos je jedna stavka opreme — npr. "M Sport paket", "Panoramski krov"',
    }),

    /* ── GALERIJA ── */
    defineField({
      name: 'images', title: 'Fotografije',
      type: 'array', group: 'galerija',
      of: [
        defineField({
          name: 'image',
          type: 'image',
          title: 'Fotografija',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt', type: 'string', title: 'Opis (alt tekst)',
              description: 'Npr. "Prednji lijevo", "Interijer", "Motor"',
            }),
          ],
        }),
      ],
      options: { layout: 'grid' },
    }),
  ],

  preview: {
    select: { title: 'title', subtitle: 'status', media: 'images.0' },
    prepare({ title, subtitle, media }) {
      const statusLabel = subtitle === 'dostupno' ? '🟢' : subtitle === 'prodano' ? '🔴' : '🟡'
      return { title, subtitle: statusLabel + ' ' + (subtitle ?? ''), media }
    },
  },
})
