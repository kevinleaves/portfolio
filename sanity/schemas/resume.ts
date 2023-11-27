import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  description: 'Upload your resume here.',
  fields: [
    defineField({
      name: 'resume',
      title: 'resume',
      type: 'file',
    }),
  ],
})
