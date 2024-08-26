// src/pages/HomePage.jsx

import React from "react"
import { Link } from "react-router-dom"
import FetchData from "../components/FetchData"

const HomePage = () => {
	return (
		<div className='p-4'>
			<h1 className='text-2xl font-bold mb-4'>Bem-vindo ao NewsAppSBI</h1>
			<FetchData category='48' />
			<div className='mt-6'>
				<Link to='/category/saiu-na-imprensa' className='text-blue-500'>
					Ver mais artigos de saiu-na-imprensa
				</Link>
			</div>
			<button id='installButton' style={{ display: "none" }}>
				Instalar App
			</button>
		</div>
	)
}

export default HomePage
