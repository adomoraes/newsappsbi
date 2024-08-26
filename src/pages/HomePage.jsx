import React, { useState, useEffect } from "react"
import FetchData from "../components/FetchData"
import "../utils/deferredPrompt"

const HomePage = () => {
	// Estado para rastrear se o PWA está instalado
	const [isAppInstalled, setIsAppInstalled] = useState(false)

	useEffect(() => {
		// Ouve pelo evento `appinstalled`
		window.addEventListener("appinstalled", () => {
			setIsAppInstalled(true)
		})

		// Checa se o aplicativo já está instalado usando a API Window.navigator.standalone
		if (
			window.matchMedia("(display-mode: standalone)").matches ||
			window.navigator.standalone
		) {
			setIsAppInstalled(true)
		}
	}, [])

	return (
		<div className='p-4'>
			<h1 className='text-2xl font-bold mb-4'>Bem-vindo ao NewsAppSBI</h1>
			<button
				id='installButton'
				className='bg-blue-500 text-white py-2 px-4 rounded mt-4'
				style={{ display: "none" }}
				aria-label='Instalar o aplicativo'>
				Instalar App
			</button>

			{/* Renderiza FetchData apenas se o aplicativo estiver instalado */}
			{isAppInstalled && <FetchData category='48' />}
		</div>
	)
}

export default HomePage
