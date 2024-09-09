import React, { useState, useEffect } from "react"
import HomePage from "./HomePage"

const Welcome = () => {
	const [deferredPrompt, setDeferredPrompt] = useState(null)
	const [isInstalled, setIsInstalled] = useState(false)
	const [loading, setLoading] = useState(true)
	const [isStandalone, setIsStandalone] = useState(false)

	// Verificação do sistema operacional
	const isIos = () => {
		const userAgent = window.navigator.userAgent.toLowerCase()
		return /iphone|ipad|ipod/.test(userAgent)
	}

	const isAndroid = () => {
		const userAgent = window.navigator.userAgent.toLowerCase()
		return /android/.test(userAgent)
	}

	const checkStandaloneMode = () => {
		return (
			window.matchMedia("(display-mode: standalone)").matches ||
			window.navigator.standalone
		)
	}

	useEffect(() => {
		// Primeira verificação: se o app já está rodando no modo standalone
		if (checkStandaloneMode()) {
			console.log("O PWA já está rodando no modo standalone.")
			setIsStandalone(true) // Atualiza o estado para indicar que está em modo standalone
			setIsInstalled(true) // Indica que o app está instalado
			setLoading(false) // Finaliza o loading
			return
		}

		// Função para lidar com o evento de instalação do app
		const handleAppInstalled = () => {
			console.log("PWA foi instalado!")
			setIsInstalled(true)
			setDeferredPrompt(null)
		}

		// Adiciona o evento para detectar a instalação do app
		window.addEventListener("appinstalled", handleAppInstalled)

		// Captura o evento 'beforeinstallprompt' para controle do prompt de instalação no Android
		window.addEventListener("beforeinstallprompt", (e) => {
			e.preventDefault()
			console.log("Evento 'beforeinstallprompt' capturado.")
			setDeferredPrompt(e)
		})

		// Finaliza o carregamento
		setLoading(false)

		// Cleanup dos event listeners
		return () => {
			window.removeEventListener("appinstalled", handleAppInstalled)
			window.removeEventListener("beforeinstallprompt", () => {
				setDeferredPrompt(null)
			})
		}
	}, [])

	const handleButtonClick = () => {
		if (deferredPrompt) {
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

	// Comportamento para iOS: instruir o usuário a instalar manualmente
	const renderIosInstallInstructions = () => (
		<p className='mt-2 text-center'>
			Para instalar o aplicativo, clique no ícone de compartilhar no navegador e
			selecione "Adicionar à Tela de Início".
		</p>
	)

	// Componente de carregamento
	if (loading) {
		return (
			<div className='flex items-center justify-center h-screen'>
				<div className='loading-spinner'>
					<p>Instalando o aplicativo...</p>
				</div>
			</div>
		)
	}

	// Se o app estiver instalado e rodando em modo standalone, renderizar <HomePage>
	if (isStandalone) {
		return <HomePage />
	}

	// Renderizar componente <Welcome> com opções baseadas na instalação e SO
	return (
		<div className='flex flex-col items-center justify-center h-screen bg-[#081F87] text-white text-center p-6'>
			<img
				className='rounded-full p-7 mb-7 bg-white mx-auto'
				src='./assets/images/logo.png'
				alt='Logo SBI'
			/>
			<h1 className='text-4xl font-bold'>Bem-vindo ao NewsAPP SBI</h1>
			<h2 className='text-2xl mt-4'>
				O essencial da infectologia nas suas mãos
			</h2>
			<p className='mt-2'>
				Fique atualizado com as últimas notícias, eventos e informações
				importantes sobre infectologia diretamente da Sociedade Brasileira de
				Infectologia.
			</p>

			{/* Instruções para iOS se o app não estiver instalado */}
			{isIos() && !checkStandaloneMode() && renderIosInstallInstructions()}

			{/* Botão de instalação ou abertura do app */}
			<button
				className={`mt-6 px-4 py-2 bg-[#00BCE4] text-[#0C033D] rounded hover:bg-[#0C033D] hover:text-[#00BCE4] transition duration-300 ${
					isIos() ? "hidden" : ""
				}`}
				onClick={handleButtonClick}>
				{isStandalone ? "Acessar o APP" : "Clique aqui para instalar!"}
			</button>
		</div>
	)
}

export default Welcome
