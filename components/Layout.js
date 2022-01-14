import Head from 'next/head'
import NavbarMenu from './Nav-top'

const Layout = ({ children }) => (
	<>
		<Head>
			<meta charset='UTF-8' />
			<meta http-equiv='X-UA-Compatible' content='IE=edge' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<title>Bếp của LEWIS</title>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
			/>
		</Head>

		<div className="w-full h-full bg-carrot">
			<div>
				<NavbarMenu />
			</div>

			<div className="">{children}</div>
		</div>

	</>
)

export default Layout