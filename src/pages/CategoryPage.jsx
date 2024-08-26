// src/pages/CategoryPage.jsx

import React from "react"
import { useParams, Link } from "react-router-dom"
import FetchData from "../components/FetchData"

const categoryMapping = {
	"saiu-na-imprensa": "48",
	"noticias-da-infectologia": "49",
	"noticias-sbi-e-federadas": "50",
	"notas-de-esclarecimentos": "37",
}

const CategoryPage = () => {
	const { name } = useParams()
	const categoryId = 48

	if (!categoryId) {
		return <p>Categoria não encontrada.</p>
	}

	return (
		<div className='p-4'>
			<h1 className='text-2xl font-bold mb-4'>{name.replace("-", " ")}</h1>
			<FetchData category={categoryId} />
			<div className='mt-6'>
				<Link to='/category/saiu-na-imprensa' className='text-blue-500'>
					Ver mais artigos de saiu-na-imprensa
				</Link>
			</div>
		</div>
	)
}

export default CategoryPage
