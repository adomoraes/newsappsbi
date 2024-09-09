import React from "react"

const Loading = ({ successMessage }) => {
	return (
		<div className='flex items-center justify-center h-screen'>
			<div className='loading-spinner'>
				{successMessage ? (
					<p>{successMessage}</p>
				) : (
					<p>Instalando o aplicativo...</p>
				)}
			</div>
		</div>
	)
}

export default Loading
