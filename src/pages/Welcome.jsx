import React, { useState, useEffect } from "react"
import HomePage from "./HomePage"
// import FetchData from './FetchData'; // Descomente quando o componente FetchData estiver implementado

const Welcome = () => {
	const [deferredPrompt, setDeferredPrompt] = useState(null)
	const [isInstalled, setIsInstalled] = useState(false)

	useEffect(() => {
		// Verificar se a PWA está instalada
		window.addEventListener("appinstalled", () => {
			setIsInstalled(true)
		})

		// Captura o evento antes da instalação
		window.addEventListener("beforeinstallprompt", (e) => {
			e.preventDefault()
			setDeferredPrompt(e)
		})

		return () => {
			window.removeEventListener("appinstalled", () => setIsInstalled(false))
			window.removeEventListener("beforeinstallprompt", () =>
				setDeferredPrompt(null)
			)
		}
	}, [])

	const handleInstallClick = () => {
		if (deferredPrompt) {
			deferredPrompt.prompt()
			deferredPrompt.userChoice.then((choiceResult) => {
				if (choiceResult.outcome === "accepted") {
					console.log("Usuário aceitou a instalação da PWA")
				}
				setDeferredPrompt(null)
			})
		}
	}

	const isIos = () => {
		const userAgent = window.navigator.userAgent.toLowerCase()
		return /iphone|ipad|ipod/.test(userAgent)
	}

	const isInStandaloneMode = () =>
		"standalone" in window.navigator && window.navigator.standalone

	return (
		<>
			{isInstalled && isInStandaloneMode && <HomePage />}
			{!isInstalled && deferredPrompt && (
				<div className='flex flex-col items-center justify-center h-screen bg-[#081F87] text-white text-center p-6'>
					<img
						className='rounded-full p-7 mb-7 bg-white mx-auto'
						src='./assets/images/logo.png'
						alt='Logo SBI'
					/>
					<h1 className='text-4xl font-bold'>Bem-vindo ao NewsAPP SBI</h1>
					<h2 className='text-2xl mt-4'>
						O essencial da infectologia na suas mãos
					</h2>
					<p className='mt-2'>
						Fique atualizado com as últimas notícias, eventos e informações
						importantes sobre infectologia diretamente da Sociedade Brasileira
						de Infectologia.
					</p>
					{isIos() &&
						!isInStandaloneMode()(
							<p className='mt-2 text-center'>
								Para instalar o aplicativo, clique no ícone de compartilhar no
								navegador e selecione "Adicionar à Tela de Início".
							</p>
						)}

					<button
						className='mt-6 px-4 py-2 bg-[#00BCE4] text-[#0C033D] rounded hover:bg-[#0C033D] hover:text-[#00BCE4] transition duration-300'
						onClick={handleInstallClick}>
						Clique aqui para instalar!
					</button>
				</div>
			)}
		</>
	)
}

export default Welcome
