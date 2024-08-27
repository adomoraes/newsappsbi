import React from "react"
import Pill from "../components/Pill"

const ContentSection = ({
	title,
	imageUrl,
	content,
	linkText,
	linkUrl,
	secondaryItems = [],
}) => {
	return (
		<section className='w-full p-5 bg-blue-200 text-left'>
			<div className='mb-4'>
				<a
					className='inline-block text-white font-bold bg-blue-900 rounded-full py-2 px-4 text-sm text-center'
					href={linkUrl}
					title={title}>
					{title}
				</a>
			</div>
			{/* Seção Principal */}
			<div className='flex flex-col sm:flex-row'>
				<div className='sm:w-1/2 p-2'>
					<img className='w-full h-auto rounded' src={imageUrl} alt={title} />
				</div>
				<div className='sm:w-1/2 p-2'>
					<h2 className='text-lg font-bold mb-2 text-blue-900'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit donec
						gravida tellus.
					</h2>
					<p className='text-blue-900 mb-4'>
						{content}{" "}
						<a
							href={linkUrl}
							className='font-bold text-blue-900'
							title={linkText}>
							{linkText}
						</a>
					</p>
				</div>
			</div>
			{/* Itens Secundários em Grid de Duas Colunas */}
			<Pill category='Notícias de Infectologia' />
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6'>
				{secondaryItems.map((item, index) => (
					<div key={index} className='p-2 bg-white rounded-lg shadow-md'>
						<img
							className='w-full h-auto rounded mb-4'
							src={item.imageUrl}
							alt={item.title}
						/>
						<h2 className='text-lg font-bold mb-2 text-blue-900'>
							{item.title}
						</h2>
						<p className='text-blue-900 mb-4'>
							{item.content}{" "}
							<a
								href={item.linkUrl}
								className='font-bold text-blue-900'
								title={item.linkText}>
								{item.linkText}
							</a>
						</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default ContentSection
