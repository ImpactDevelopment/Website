import { Fab } from '@material-ui/core'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Head from 'next/head'
import React from 'react'

import ScrollTop from './ScrollTop'
import Copyright from './Copyright'
import NavBar from './NavBar'

interface Props {
	children: React.ReactElement
	title?: string
}

export default function Layout({ children, title = 'Impact' }: Props): JSX.Element {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<NavBar title={title} />
			<ScrollTop>
				<Fab color="secondary" size="small" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>

			{children}

			<footer>
				<Copyright />
			</footer>
		</>
	)
}
