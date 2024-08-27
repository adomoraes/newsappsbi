import React from "react"

const SocialLink = ({ href, title, imageUrl, altText }) => {
	return (
		<a href={href} title={title} className='mx-2'>
			<img src={imageUrl} alt={altText} className='w-auto h-auto' />
		</a>
	)
}

export default SocialLink
