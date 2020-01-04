import { Fab } from '@material-ui/core'
import { KeyboardArrowUp } from '@material-ui/icons'
import Head from 'next/head'

import ScrollTop from './ScrollTop'
import Copyright from './Copyright'
import NavBar from './NavBar'
import Beta from './Beta'

import React from 'react'

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
			<Beta /> {/*TODO Remove when stable*/}
			<NavBar title={title} />
			<ScrollTop>
				<Fab color="secondary" size="small" aria-label="scroll back to top">
					<KeyboardArrowUp />
				</Fab>
			</ScrollTop>
			{children}
			<footer>
				<Copyright />
			</footer>
		</>
	)
}
