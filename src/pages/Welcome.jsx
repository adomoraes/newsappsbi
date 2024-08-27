import React, { useState, useEffect } from "react"
import HomePage from "./HomePage"
// import FetchData from './FetchData'; // Descomente quando o componente FetchData estiver implementado

const Welcome = () => {
	const [installPromptEvent, setInstallPromptEvent] = useState(null)
	const [isAppInstalled, setIsAppInstalled] = useState(false)

	useEffect(() => {
		const handleBeforeInstallPrompt = (e) => {
			e.preventDefault()
			setInstallPromptEvent(e)
		}

		window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

		// Check if the app is installed
		const checkAppInstalled = () => {
			if (window.matchMedia("(display-mode: standalone)").matches) {
				setIsAppInstalled(true)
			}
		}

		checkAppInstalled()

		return () => {
			window.removeEventListener(
				"beforeinstallprompt",
				handleBeforeInstallPrompt
			)
		}
	}, [])

	const handleInstallClick = () => {
		if (installPromptEvent) {
			installPromptEvent.prompt()
			installPromptEvent.userChoice.then((choiceResult) => {
				if (choiceResult.outcome === "accepted") {
					console.log("User accepted the install prompt")
				} else {
					console.log("User dismissed the install prompt")
				}
				setInstallPromptEvent(null)
			})
		}
	}

	return (
		<div className='p-4'>
			<h1 className='text-2xl font-bold mb-4'>Bem-vindo ao NewsAppSBI</h1>
			{!isAppInstalled && installPromptEvent && (
				<button
					id='installButton'
					className='bg-blue-500 text-white py-2 px-4 rounded mt-4'
					onClick={handleInstallClick}
					aria-label='Instalar o aplicativo'>
					Instalar App
				</button>
			)}

			{/* Renderiza FetchData apenas se o aplicativo estiver instalado */}
			{isAppInstalled && <HomePage />}
		</div>
	)
}

export default Welcome
