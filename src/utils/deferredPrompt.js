// Inicialize o deferredPrompt para uso posterior para exibir o prompt de instalação do navegador
let deferredPrompt

// Ouve pelo evento `beforeinstallprompt`
window.addEventListener("beforeinstallprompt", (e) => {
	// Impede que o prompt padrão seja mostrado automaticamente
	e.preventDefault()
	// Guarda o evento para ser disparado posteriormente
	deferredPrompt = e

	// Mostre uma interface de usuário personalizada ou o prompt padrão aqui
	const installButton = document.getElementById("installButton")
	installButton.style.display = "block"

	installButton.addEventListener("click", () => {
		// Esconde o botão de instalação personalizado
		installButton.style.display = "none"
		// Mostra o prompt de instalação padrão do navegador
		deferredPrompt.prompt()
		// Espere a resposta do usuário
		deferredPrompt.userChoice.then((choiceResult) => {
			if (choiceResult.outcome === "accepted") {
				console.log("User accepted the A2HS prompt")
			} else {
				console.log("User dismissed the A2HS prompt")
			}
			deferredPrompt = null
		})
	})
})

// Lide com o evento appinstalled, que é disparado quando o PWA é instalado
window.addEventListener("appinstalled", () => {
	console.log("PWA foi instalado")
})
