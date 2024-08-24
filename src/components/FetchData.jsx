// src/components/FetchData.jsx

import React, { useEffect, useState } from "react"
import api from "../api/api"

const FetchData = ({ category }) => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const response = await api.get("posts", {
					params: { categories: category },
				})
				setData(response.data)
			} catch (err) {
				setError(err)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [category])

	if (loading) return <p>Carregando...</p>
	if (error) return <p>Erro ao carregar dados: {error.message}</p>

	return (
		<div>
			{data.map((post) => (
				<div
					key={post.id}
					className='p-4 mb-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4'>
					<h2 className='text-xl font-medium text-black'>
						{post.title.rendered}
					</h2>
					<p
						className='text-gray-500'
						dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
					/>
				</div>
			))}
		</div>
	)
}

export default FetchData
