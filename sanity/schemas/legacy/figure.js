export default {
  name: 'figure',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      title: 'Bildetekst',
      name: 'caption',
      type: 'string',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternativ tekst',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      description: 'Viktig for SEO and tilgjengelighet.',
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
