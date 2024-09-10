import React from "react"

const Loading = ({ successMessage }) => {
	const handleReload = () => {
		window.location.reload() // Ação de recarregar a página
	}

	return (
		<div className='flex flex-col items-center justify-center h-screen bg-[#081F87] text-white text-center p-6'>
			<img
				className='rounded-full p-7 mb-7 bg-white mx-auto'
				src='./assets/images/logo.png'
				alt='Logo SBI'
			/>
			<div className='loading-spinner'>
				{successMessage ? (
					<>
						<p>{successMessage}</p>
						<button
							onClick={handleReload}
							className='mt-6 px-4 py-2 bg-[#00BCE4] text-[#0C033D] rounded hover:bg-[#0C033D] hover:text-[#00BCE4] transition duration-300'>
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
