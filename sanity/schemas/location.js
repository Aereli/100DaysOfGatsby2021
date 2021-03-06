export default {
  name: 'locations',
  title: 'locations',
  type: 'document',
  fields: [
    {
      name: 'city',
      title: 'City Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'City Description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
