import { AppBar, Fab, Toolbar, Typography, ButtonBase } from '@material-ui/core'
import Link from 'next/link'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Head from 'next/head'
import React from 'react'

import ElevationScroll from './ElevationScroll'
import ScrollTop from './ScrollTop'
import Copyright from './Copyright'

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
			<ElevationScroll>
				<AppBar position="sticky">
					<Toolbar>
						<ButtonBase>
							<Link href="/">
								<Typography variant="h5">{title}</Typography>
							</Link>
						</ButtonBase>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
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
