import { Builder } from '@builder.io/react'
import dynamic from 'next/dynamic'

import { imageBuilderInput } from '@/blocks/constants'


Builder.registerComponent(
	dynamic<never>(() => import('./Media')),
	{
		name: 'MEDIA_BLOCK',
		inputs: [
			{
				name: 'hasOptions',
				friendlyName: 'Show More Options',
				type: 'boolean',
				defaultValue: true,
			},
			{
				friendlyName: 'Options',
				name: 'options',
				type: 'object',
				subFields: [
					{
						name: 'images',
						type: 'object',
						subFields: [
							{
								...imageBuilderInput,
								name: 'desktop',
								friendlyName: 'Image (Desktop)',
								// @BUG BUILDER - não aceita showIf em subFields
								showIf: undefined,
							},
							{
								...imageBuilderInput,
								name: 'mobile',
								friendlyName: 'Image (Mobile)',
								// @BUG BUILDER - não aceita showIf em subFields
								showIf: undefined,
							},
						],
					},
				],
			},
		],
	}
)
