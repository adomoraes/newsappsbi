import React from "react"
import SocialLink from "../components/SocialLinks"

const SocialSection = () => {
	return (
		<section className='w-full p-5 text-center bg-white'>
			<h2 className='text-lg font-bold text-blue-900 mb-4'>
				Nossas redes sociais
			</h2>

			<div className='flex justify-center items-center'>
				<SocialLink
					href='https://www.instagram.com/sbinfecto/'
					title='Siga-nos no Instagram'
					imageUrl='http://wreck.tecnologia.ws/tino/sbi/template/assets/images/instagram.png'
					altText='Perfil SBI Instagram'
				/>
				<SocialLink
					href='https://www.youtube.com/channel/UC_wYNM7oYzT68pPwRPob9fA'
					title='Inscreva-se no canal'
					imageUrl='http://wreck.tecnologia.ws/tino/sbi/template/assets/images/youtube.png'
					altText='Canal SBI Youtube'
				/>
			</div>
		</section>
	)
}

export default SocialSection
