import { Input } from '@builder.io/sdk'

export const imageBuilderInput: Input = {
	name: 'image',
	type: 'object',
	friendlyName: 'Imagem',
	defaultValue: {
		layout: 'responsive',
	},
	subFields: [
		{
			name: 'url',
			type: 'file',
			friendlyName: 'Arquivo',
			allowedFileTypes: ['svg', 'png', 'gif', 'jpg', 'jpeg'],
		},
		{
			name: 'alt',
			type: 'longText',
			friendlyName: 'Alt',
		},
		{
			name: 'layout',
			type: 'string',
			friendlyName: 'Layout',
			defaultValue: 'responsive',
			hideFromUI: true,
			enum: ['intrinsic', 'fixed', 'responsive', 'fill'],
		},
		{
			name: 'description',
			type: 'string',
			hideFromUI: true,
		},
		{
			name: 'mime_type',
			type: 'string',
			hideFromUI: true,
		},
		{
			name: 'sizes',
			type: 'object',
			hideFromUI: true,
			subFields: [
				{
					name: 'medium',
					type: 'string',
				},
				{
					name: 'large',
					type: 'string',
				},
			],
		},
	],
}
