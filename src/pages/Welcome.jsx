import React, { useState, useEffect } from "react"
import HomePage from "./HomePage"
import Loading from "../components/Loading" // Novo componente de Loading

const Welcome = () => {
	const [deferredPrompt, setDeferredPrompt] = useState(null)
	const [isInstalled, setIsInstalled] = useState(false) // PWA instalado
	const [isStandalone, setIsStandalone] = useState(false) // PWA em modo standalone
	const [loading, setLoading] = useState(true)
	const [installSuccess, setInstallSuccess] = useState(false) // Controle de sucesso na instalação
	const [showAccessPrompt, setShowAccessPrompt] = useState(false) // Controle do prompt para acessar app

	// Verificação do sistema operacional
	const isIos = () => {
		const userAgent = window.navigator.userAgent.toLowerCase()
		return /iphone|ipad|ipod/.test(userAgent)
	}

	const isAndroid = () => {
		const userAgent = window.navigator.userAgent.toLowerCase()
		return /android/.test(userAgent)
	}

	// Função para verificar o modo standalone
	const checkStandaloneMode = () => {
		return (
			window.matchMedia("(display-mode: standalone)").matches ||
			window.navigator.standalone
		)
	}

	useEffect(() => {
		// Verifica se o app já está rodando no modo standalone
		if (checkStandaloneMode()) {
			console.log("PWA está rodando em modo standalone.")
			setIsStandalone(true) // App rodando em modo standalone
			setIsInstalled(true) // App instalado
			setLoading(false) // Encerra o loading
		}

		// Função para lidar com o evento de instalação do app
		const handleAppInstalled = () => {
			console.log(
				"PWA foi instalado, aguardando 10 segundos para mostrar sucesso..."
			)
			setTimeout(() => {
				setInstallSuccess(true) // Exibe mensagem de sucesso na instalação após 10 segundos
				setShowAccessPrompt(true) // Exibe o prompt para acessar o app após instalação
			}, 10000) // Espera 10 segundos antes de definir installSuccess como true
			setIsInstalled(true) // Marca como instalado
			setLoading(false) // Encerra o loading
		}

		// Captura o evento 'appinstalled' para detectar quando o PWA é instalado
		window.addEventListener("appinstalled", handleAppInstalled)

		// Captura o evento 'beforeinstallprompt' para controle do prompt de instalação no Android
		window.addEventListener("beforeinstallprompt", (e) => {
			e.preventDefault()
			console.log("Evento 'beforeinstallprompt' capturado.")
			setDeferredPrompt(e)
		})

		setLoading(false) // Encerra o estado de carregamento se nada estiver pendente

		// Cleanup dos event listeners
		return () => {
			window.removeEventListener("appinstalled", handleAppInstalled)
			window.removeEventListener("beforeinstallprompt", () => {
				setDeferredPrompt(null)
			})
		}
	}, [])

	const handleButtonClick = () => {
		if (isInstalled && !isStandalone) {
			// Se o PWA estiver instalado, mas não estiver em modo standalone
			if (isAndroid()) {
				// Para Android, tentar abrir em modo standalone
				window.location.href = `${window.location.origin}/?standalone=true` // Forçar modo standalone
			} else {
				// Para iOS, alertar o usuário para abrir da tela inicial
				alert(
					"Abra o aplicativo a partir da tela inicial para o modo standalone."
				)
			}
			return
		}

		if (isStandalone) {
			// Redireciona ou recarrega a página se o app já estiver em modo standalone
			window.location.reload()
		} else if (deferredPrompt) {
			// Mostra o prompt de instalação se disponível
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

	// Componente de carregamento e sucesso na instalação
	if (loading || installSuccess) {
		return (
			<Loading
				successMessage={installSuccess ? "App instalado com sucesso!" : ""}
			/>
		)
	}

	// Exibe prompt perguntando se o usuário deseja acessar o app em standalone
	if (showAccessPrompt) {
		const accessStandalone = window.confirm(
			"Deseja acessar o app no modo standalone?"
		)
		if (accessStandalone) {
			window.location.reload() // Recarrega a página em standalone
		}
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

			{/* Botão de instalação ou abertura do app */}
			{isInstalled ? (
				<>
					<h1 className='text-4xl font-bold mb-5'>Download iniciado!</h1>

					<div
						className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
						role='status'>
						<span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
							Instalando APP...
						</span>
					</div>
				</>
			) : (
				<>
					<h1 className='text-4xl font-bold'>Bem-vindo ao NewsAPP SBI</h1>
					<h2 className='text-2xl mt-4'>
						O essencial da infectologia nas suas mãos
					</h2>
					<p className='mt-2'>
						Fique atualizado com as últimas notícias, eventos e informações
						importantes sobre infectologia diretamente da Sociedade Brasileira
						de Infectologia.
					</p>
					{/* Instruções para iOS se o app não estiver instalado */}
					{isIos() && !checkStandaloneMode() && (
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
				</>
			)}
		</div>
	)
}

export default Welcome
