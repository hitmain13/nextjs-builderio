interface MediaProps {
	options?: {
		images?: {
			desktop?: {
				url: string
			}
			mobile?: {
				url: string
			}
		}
	}
}

const Media = (props: MediaProps) => {
	const images = props?.options?.images
	const imgURL = images?.desktop?.url || images?.mobile?.url
	const imageSourceStringify = JSON.stringify(images)
	console.log('-->Image Props:', props.options)
	return (
		<div>
			<p>Insert medias with subFields:</p>
			<p>{`Image Props: ${images ? imageSourceStringify : '[...]'}`}</p>
			<img src={imgURL} />
		</div>
	)
}

export default Media
