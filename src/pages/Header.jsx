import React from "react"

const Header = () => {
	return (
		<header
			className='bg-no-repeat bg-right-top bg-auto bg-blue-100 text-center py-5'
			style={{
				backgroundImage:
					"url('http://wreck.tecnologia.ws/tino/sbi/template/assets/images/globo.png')",
			}}>
			<div className='flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto'>
				<div className='p-0 pr-5'>
					<img
						className='rounded-full md:rounded-tr-full md:rounded-br-full sm:rounded-tl-none sm:rounded-bl-none p-5 bg-white mx-auto sm:ml-0'
						src='http://wreck.tecnologia.ws/tino/sbi/template/assets/images/logo.png'
						alt='Logo SBI'
					/>
				</div>
				<div className='bg-blue-900 text-white rounded-full md:rounded-tl-full md:rounded-bl-full sm:rounded-tr-none sm:rounded-br-none p-2 text-sm mt-4 sm:mt-0'>
					<p>
						<strong>NewsApp SBI - Edição 1 - 31 de Agosto de 2024</strong>
					</p>
				</div>
			</div>
		</header>
	)
}

export default Header
