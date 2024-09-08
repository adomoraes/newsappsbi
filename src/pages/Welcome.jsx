import React, { useState, useEffect } from "react"
import HomePage from "./HomePage"

const Welcome = () => {
	const [deferredPrompt, setDeferredPrompt] = useState(null)
	const [isInstalled, setIsInstalled] = useState(false)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// Função para lidar com o evento de instalação do app
		const handleAppInstalled = () => {
			console.log("PWA foi instalado!")
			setIsInstalled(true)
			setDeferredPrompt(null)
		}

		// Adicionando o evento para detectar quando o app é instalado
		window.addEventListener("appinstalled", handleAppInstalled)

		// Capturando o evento de antes da instalação para controle
		window.addEventListener("beforeinstallprompt", (e) => {
			e.preventDefault()
			console.log("Evento 'beforeinstallprompt' capturado.")
			setDeferredPrompt(e)
		})

		// Verificando se o PWA já está rodando no modo standalone
		if (
			window.matchMedia("(display-mode: standalone)").matches ||
			window.navigator.standalone
		) {
			console.log("O PWA já está rodando no modo standalone.")
			setIsInstalled(true)
		} else {
			console.log(
				"O PWA não está instalado ou não está rodando no modo standalone."
			)
		}

		setLoading(false) // Encerra o loading após a verificação
		return () => {
			window.removeEventListener("appinstalled", handleAppInstalled)
			window.removeEventListener("beforeinstallprompt", () => {
				setDeferredPrompt(null)
			})
		}
	}, [])

	// Função para simular o carregamento ao finalizar a instalação
	useEffect(() => {
		if (isInstalled) {
			console.log(
				"Mostrando tela de carregamento por 3 segundos após a instalação."
			)
			setTimeout(() => {
				setLoading(false)
			}, 3000)
		}
	}, [isInstalled])

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

	// Component Loading: Exibir tela de carregamento enquanto aguarda
	if (loading) {
		return (
			<div className='flex items-center justify-center h-screen'>
				<div className='loading-spinner'>
					{/* Adicionar uma animação ou spinner */}
					<p>Instalando o aplicativo...</p>
				</div>
			</div>
		)
	}

	// Se o app estiver instalado, redirecionar para a HomePage
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
					O essencial da infectologia nas suas mãos
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
					{isInstalled ? "Acessar o APP" : "Clique aqui para instalar!"}
				</button>
			</div>
		)
	}
}

export default Welcome
