import Head from 'next/head'
import NavbarMenu from './Nav-top'

const Layout = ({ children }) => (
	<>
		<Head>
			<meta charset='UTF-8' />
			<meta http-equiv='X-UA-Compatible' content='IE=edge' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<title>Bếp của LEWIS</title>
		</Head>

		<header>
			<NavbarMenu />
		</header>

		<main>{children}</main>
	</>
)

export default Layout