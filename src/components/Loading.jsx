import React from "react"

const Loading = ({ successMessage }) => {
	const handleReload = () => {
		window.location.reload() // Ação de recarregar a página
	}

	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<div className='loading-spinner'>
				{successMessage ? (
					<>
						<p>{successMessage}</p>
						<button
							onClick={handleReload}
							className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
							Abrir aplicativo
						</button>
					</>
				) : (
					<p>Instalando o aplicativo...</p>
				)}
			</div>
		</div>
	)
}

export default Loading
