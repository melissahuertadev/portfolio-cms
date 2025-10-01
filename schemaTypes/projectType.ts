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
      validation: (rule) => rule.required().max(280),
    }),
    defineField({
      name: 'long_description',
      title: 'Long Description',
      type: 'array',
      of: [{ type: 'block' }], // permite HTML/Rich Text
      validation: (rule) => rule.required().max(1000),
    }),
    defineField({
      name: 'stack',
      title: 'Stack',
      type: 'array',
      of: [{
          type: 'reference',
          to: [{ type: 'skillType' }],
        },],
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