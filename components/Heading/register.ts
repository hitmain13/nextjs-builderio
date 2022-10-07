import { Builder } from '@builder.io/react'
import dynamic from 'next/dynamic'

Builder.registerComponent(
  dynamic<never>(() => import('./Heading')),
  {
    name: 'Heading',
    inputs: [{ friendlyName: 'Título', name: 'title', type: 'text', required: true }],
  }
)
