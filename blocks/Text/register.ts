import { Builder } from '@builder.io/react'
import dynamic from 'next/dynamic'

Builder.registerComponent(
  dynamic<never>(() => import('./Text')),
  {
    name: 'TEXT_BLOCK',
    inputs: [
      { friendlyName: 'Title', name: 'title', type: 'text', required: true },
      { friendlyName: 'Description', name: 'description', type: 'richText', required: true },
    ],
  }
)
