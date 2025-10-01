import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          { title: 'Web', value: 'web' },
          { title: 'Game', value: 'game' },
          { title: 'Showcase', value: 'showcase' },
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'long_description',
      type: 'text',
      validation: (rule) => rule.required().max(1000),
    }),
    defineField({
      name: 'stack',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'link',
      type: 'url',
      validation: (rule) => rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'codeLink',
      type: 'url',
      validation: (rule) => rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'image',
      type: 'array',
      of: [{type: 'image'}],
      validation: (rule) => rule.required().min(1),
    }),
  ],
})