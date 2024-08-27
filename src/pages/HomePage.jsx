import React, { useState, useEffect } from "react"
import Header from "./Header"
import EditorialSection from "./EditorialSection"
import ContentSection from "./ContentSection"
import ListSection from "./ListSection"
import SocialSection from "./SocialSection"
import Footer from "./Footer"
import "../utils/deferredPrompt"

const HomePage = () => {
	return (
		<>
			<Header />
			<EditorialSection
				title='Lorem ipsum dolor sit amet, consectetur adipiscing elit donec gravida tellus.'
				category='Editorial'
				imageUrl='http://wreck.tecnologia.ws/tino/sbi/template/assets/images/iStock-1633320190.png'
				content='Lorem ipsum dolor sit amet, consectetur adipiscing elit donec gravida tellus. Aenean ipsum mi, luctus commodo elit eu, facilisis interdum neque. Morbi ac ante vitae quam euismod iaculis vel eget erat. Ut et odio quis magna porttitor egestas. Aenean feugiat gravida mauris in tincidunt. Aliquam tempus id urna vitae suscipit. Duis laoreet tellus eu velit ultrices varius.'
				linkText='Leia mais'
				linkUrl='#'
			/>
			<ContentSection
				title='Especial do Mês'
				imageUrl='http://wreck.tecnologia.ws/tino/sbi/template/assets/images/iStock-1486146700.png'
				content='Lorem ipsum dolor sit amet, consectetur adipiscing elit donec gravida tellus. Aenean ipsum mi, luctus commodo elit eu, facilisis interdum neque. Morbi ac ante vitae quam euismod iaculis vel eget erat. Ut et odio quis magna porttitor egestas. Aenean feugiat gravida mauris in tincidunt. Aliquam tempus id urna vitae suscipit. Duis laoreet tellus eu velit ultrices varius.'
				linkText='Leia mais'
				linkUrl='#'
				secondaryItems={[
					{
						title:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit donec gravida tellus.",
						imageUrl:
							"http://wreck.tecnologia.ws/tino/sbi/template/assets/images/iStock-1203775802.png",
						content:
							"Aenean ipsum mi, luctus commodo elit eu, facilisis interdum neque. Morbi ac ante vitae quam euismod iaculis vel eget erat. Ut et odio quis magna porttitor egestas. Aenean feugiat gravida mauris in tincidunt. Aliquam tempus id urna vitae suscipit. Duis laoreet tellus eu velit ultrices varius.",
						linkText: "Leia mais",
						linkUrl: "#",
					},
					{
						title:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit donec gravida tellus.",
						imageUrl:
							"http://wreck.tecnologia.ws/tino/sbi/template/assets/images/iStock-1493870734.png",
						content:
							"Aenean ipsum mi, luctus commodo elit eu, facilisis interdum neque. Morbi ac ante vitae quam euismod iaculis vel eget erat. Ut et odio quis magna porttitor egestas. Aenean feugiat gravida mauris in tincidunt. Aliquam tempus id urna vitae suscipit. Duis laoreet tellus eu velit ultrices varius.",
						linkText: "Leia mais",
						linkUrl: "#",
					},
				]}
			/>
			<ListSection
				title='Próximos Eventos'
				items={[
					{
						title:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit donec gravida tellus.",
						imageUrl:
							"http://wreck.tecnologia.ws/tino/sbi/template/assets/images/iStock-974238866.png",
						content:
							"Aenean ipsum mi, luctus commodo elit eu, facilisis interdum neque. Morbi ac ante vitae quam euismod iaculis vel eget erat. Ut et odio quis magna porttitor egestas. Aenean feugiat gravida mauris in tincidunt.",
						linkUrl: "#",
					},
					{
						title:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit donec gravida tellus.",
						imageUrl:
							"http://wreck.tecnologia.ws/tino/sbi/template/assets/images/iStock-1496377580.png",
						content:
							"Aenean ipsum mi, luctus commodo elit eu, facilisis interdum neque. Morbi ac ante vitae quam euismod iaculis vel eget erat. Ut et odio quis magna porttitor egestas. Aenean feugiat gravida mauris in tincidunt.",
						linkUrl: "#",
					},
					{
						title:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit donec gravida tellus.",
						imageUrl:
							"http://wreck.tecnologia.ws/tino/sbi/template/assets/images/iStock-1496375534.png",
						content:
							"Aenean ipsum mi, luctus commodo elit eu, facilisis interdum neque. Morbi ac ante vitae quam euismod iaculis vel eget erat. Ut et odio quis magna porttitor egestas. Aenean feugiat gravida mauris in tincidunt.",
						linkUrl: "#",
					},
				]}
			/>
			<EditorialSection
				title='Lorem ipsum dolor sit amet, consectetur adipiscing elit donec gravida tellus.'
				category='Pergunta Clínica'
				imageUrl='http://wreck.tecnologia.ws/tino/sbi/template/assets/images/iStock-1356114754.png'
				content='Lorem ipsum dolor sit amet, consectetur adipiscing elit donec gravida tellus. Aenean ipsum mi, luctus commodo elit eu, facilisis interdum neque. Morbi ac ante vitae quam euismod iaculis vel eget erat. Ut et odio quis magna porttitor egestas. Aenean feugiat gravida mauris in tincidunt. Aliquam tempus id urna vitae suscipit. Duis laoreet tellus eu velit ultrices varius.'
				linkText='Leia mais'
				linkUrl='#'
			/>
			<SocialSection />
			<Footer />
		</>
	)
}

export default HomePage
