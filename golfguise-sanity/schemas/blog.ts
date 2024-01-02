import {Rule} from 'sanity'

export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of blog article',
      validation: (Rule: Rule) => Rule.required().error('required'),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your blog article',
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
      type: 'image',
      title: 'Title Image',
      validation: (Rule: Rule) => Rule.required().error('required'),
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
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
      title: 'Category',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
    },
  ],
}
