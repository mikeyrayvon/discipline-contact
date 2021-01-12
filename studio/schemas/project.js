export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link',
    },
    {
      name: 'previewImage',
      type: 'image',
      title: 'Preview'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'previewImage',
    },
  },
}
