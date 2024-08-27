import React from "react"
import Pill from "../components/Pill"

const EditorialSection = ({
	category,
	title,
	imageUrl,
	content,
	linkText,
	linkUrl,
}) => {
	return (
		<section className='w-full p-5 bg-blue-100 text-left'>
			{/* Componente Pill para Categorias */}
			<Pill category={category} />

			{/* Título da Seção */}
			<h2 className='text-lg font-bold text-blue-900'>{title}</h2>

			{/* Conteúdo da Seção */}
			<p className='mt-2 text-blue-900'>
				{content}{" "}
				<a href={linkUrl} className='font-bold text-blue-900' title={linkText}>
					{linkText}
				</a>
			</p>

			{/* Imagem */}
			<img className='mt-4 w-full h-auto rounded' src={imageUrl} alt={title} />
		</section>
	)
}

export default EditorialSection
