import { defineField, defineType } from 'sanity'

export const carMakeType = defineType({
  name: 'carMake',
  title: 'Marka vozila',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Naziv marke',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 64 },
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: 'name' },
  },
})
