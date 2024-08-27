import React from "react"

const Pill = ({ category }) => {
	return (
		<>
			<a
				className='block text-white font-bold bg-blue-900 rounded-full py-2 px-4 text-sm text-center mb-4 max-w-fit'
				href='#'
				title={category}>
				{category}
			</a>
		</>
	)
}

export default Pill
