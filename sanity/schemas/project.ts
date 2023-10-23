import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    }),
    defineField({name: 'url', type: 'url', title: 'URL'}),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'object',
      description: 'add project details here',
      fields: [
        {name: 'why', type: 'blockContent', title: 'Why'},
        {name: 'description', type: 'blockContent', title: 'Description'},
        {name: 'reflection', type: 'blockContent', title: 'Reflection'},
        {name: 'challenges', type: 'blockContent', title: 'Challenges/Problems Faced'},
        {name: 'spotlight', type: 'blockContent', title: 'Spotlight'},
      ],
    }),
  ],
})
