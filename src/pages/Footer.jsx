import React from "react"

const Footer = () => {
	return (
		<footer className='w-11/12 bg-blue-900 p-5 m-auto rounded-full text-center text-white'>
			<p className='font-bold'>Sociedade Brasileira de Infectologia</p>
			<p>
				Rua Teixeira da Silva, 660 - Cj. 42 - Paraíso - São Paulo/SP - CEP:
				04002-033
			</p>
			<p>(11) 5575-5647</p>
			<p>(11) 97066-9856</p>
			<p>
				<a
					href='mailto:sbi@infectologia.org.br'
					className='text-white underline'
					title='Enviar email'>
					sbi@infectologia.org.br
				</a>
			</p>
		</footer>
	)
}

export default Footer
