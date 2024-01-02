import {Rule} from 'sanity'

export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('required'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule: Rule) => Rule.required().error('required'),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString,
    },
    {
      name: 'titleImage',
      title: 'Title Image',
      type: 'image',
      validation: (Rule: Rule) => Rule.required().error('required'),
    },
    {
      name: 'smallDescription',
      title: 'Small Description',
      type: 'text',
      validation: (Rule: Rule) => Rule.max(200).error('Max 200 characters'),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [{type: 'text', name: 'alt', title: 'Alt'}],
        },
      ],
    },
    {
      name: 'category',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
    },
  ],
}
