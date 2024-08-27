import React from "react"

const ListSection = ({ title, items }) => {
	return (
		<section className='w-full p-5 bg-blue-100 text-left'>
			{/* Título da Seção */}
			<div className='mb-4'>
				<a
					className='inline-block text-white font-bold bg-blue-900 rounded-full py-2 px-4 text-sm text-center'
					href='#'
					title={title}>
					{title}
				</a>
			</div>

			{/* Lista de Itens */}
			<div>
				{items.map((item, index) => (
					<div
						key={index}
						className='flex items-start bg-white p-4 mb-4 rounded-lg shadow-md'>
						<img
							className='w-24 h-24 mr-4 rounded'
							src={item.imageUrl}
							alt={item.title}
						/>
						<div>
							<p className='text-blue-900'>
								<strong className='block mb-2'>{item.title}</strong>
								{item.content}
								<a
									href={item.linkUrl}
									className='font-bold text-blue-900'
									title='Leia mais'>
									Leia mais
								</a>
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default ListSection
