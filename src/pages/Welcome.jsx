import React, { useState, useEffect } from "react"
import HomePage from "./HomePage"

const Welcome = () => {
	const [deferredPrompt, setDeferredPrompt] = useState(null)
	const [isInstalled, setIsInstalled] = useState(false)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// Verificar se a PWA está instalada
		const handleAppInstalled = () => {
			setIsInstalled(true)
		}

		window.addEventListener("appinstalled", handleAppInstalled)

		// Captura o evento antes da instalação
		window.addEventListener("beforeinstallprompt", (e) => {
			e.preventDefault()
			setDeferredPrompt(e)
		})

		// Verificar manualmente se o PWA já está em modo standalone
		if (
			window.matchMedia("(display-mode: standalone)").matches ||
			window.navigator.standalone
		) {
			setIsInstalled(true)
		}

		setLoading(false) // Encerrar o carregamento quando o estado inicial for determinado

		return () => {
			window.removeEventListener("appinstalled", handleAppInstalled)
			window.removeEventListener("beforeinstallprompt", () =>
				setDeferredPrompt(null)
			)
		}
	}, [])

	useEffect(() => {
		if (isInstalled) {
			// Mostrar loading por 3 segundos se a PWA estiver instalada
			setTimeout(() => {
				setLoading(false)
			}, 3000)
		} else {
			setLoading(false)
		}
	}, [isInstalled])

	const handleButtonClick = () => {
		if (isInstalled) {
			// Se o PWA já está instalado, tente abrir o aplicativo
			window.location.href = "/"
		} else if (deferredPrompt) {
			// Se o PWA não está instalado, mostramos o prompt de instalação
			deferredPrompt.prompt()
			deferredPrompt.userChoice.then((choiceResult) => {
				if (choiceResult.outcome === "accepted") {
					console.log("Usuário aceitou o prompt de instalação.")
				} else {
					console.log("Usuário recusou o prompt de instalação.")
				}
				setDeferredPrompt(null)
			})
		}
	}

	const isIos = () => {
		const userAgent = window.navigator.userAgent.toLowerCase()
		return /iphone|ipad|ipod/.test(userAgent)
	}

	const isInStandaloneMode = () => {
		return (
			window.matchMedia("(display-mode: standalone)").matches ||
			window.navigator.standalone
		)
	}

	if (loading) {
		return <div>Loading...</div>
	}

	if (isInstalled) {
		return <HomePage />
	} else {
		return (
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
					importantes sobre infectologia diretamente da Sociedade Brasileira de
					Infectologia.
				</p>
				{isIos() && !isInStandaloneMode() && (
					<p className='mt-2 text-center'>
						Para instalar o aplicativo, clique no ícone de compartilhar no
						navegador e selecione "Adicionar à Tela de Início".
					</p>
				)}

				<button
					className={`mt-6 px-4 py-2 bg-[#00BCE4] text-[#0C033D] rounded hover:bg-[#0C033D] hover:text-[#00BCE4] transition duration-300 ${
						isIos() ? "hidden" : ""
					}`}
					onClick={handleButtonClick}>
					{isInstalled
						? "Clique aqui para abrir o aplicativo!"
						: "Clique aqui para instalar!"}
				</button>
			</div>
		)
	}
}

export default Welcome
