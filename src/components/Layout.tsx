import { AppBar, Box, Container, makeStyles, Theme, Toolbar } from '@material-ui/core'
import { KeyboardArrowUp } from '@material-ui/icons'
import Head from 'next/head'
import NextLink from 'next/link'
import MuiLink from '@material-ui/core/Link'

import pages from '../pages'

import ScrollTop from './ScrollTop'
import Copyright from './Copyright'
import Beta from './Beta'
import ElevationScroll from './ElevationScroll'
import NavLink from './NavLink'
import ThemeToggle from './ThemeToggle'

import React from 'react'

interface Props {
	children: React.ReactElement | React.ReactElement[]
	title?: string
}

const useStyles = makeStyles((theme: Theme) => ({
	grow: {
		flexGrow: 1,
	},
	navLink: {
		marginLeft: theme.spacing(2),
	},
}))

export default function Layout({ children, title = 'Impact' }: Props): JSX.Element {
	const classes = useStyles(undefined)

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<Beta /> {/*TODO Remove when stable*/}
			<ElevationScroll>
				<AppBar component="header" position="sticky">
					<Toolbar>
						<NextLink href="/" passHref>
							<MuiLink variant="h5" color="inherit">
								{title}
							</MuiLink>
						</NextLink>
						<div className={classes.grow} />
						{pages.map((page, index) => (
							<NavLink key={index} href={page.path} className={classes.navLink}>
								{page.title}
							</NavLink>
						))}
						<ThemeToggle className={classes.navLink} />
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<ScrollTop>
				<KeyboardArrowUp />
			</ScrollTop>
			<Container maxWidth="sm">
				<Box my={4}>{children}</Box>
			</Container>
			<footer>
				<Copyright />
			</footer>
		</>
	)
}
