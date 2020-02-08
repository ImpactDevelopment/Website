import { AppBar, makeStyles, Toolbar } from '@material-ui/core'
import NextLink from 'next/link'
import MuiLink from '@material-ui/core/Link'

import ElevationScroll from './ElevationScroll'
import NavLink from './NavLink'
import ThemeToggle from './ThemeToggle'

import React from 'react'

interface Props {
	title: string
}

const useStyles = makeStyles(theme => ({
	grow: {
		flexGrow: 1,
	},
	navLink: {
		marginLeft: theme.spacing(2),
	},
}))

export default function NavBar(props: Props): JSX.Element {
	const classes = useStyles(undefined)

	return (
		<ElevationScroll>
			<AppBar position="sticky">
				<Toolbar>
					<NextLink href="/" passHref>
						<MuiLink variant="h5" color="inherit">
							{props.title}
						</MuiLink>
					</NextLink>
					<div className={classes.grow} />
					<NavLink href="/about">About</NavLink>
					<ThemeToggle />
				</Toolbar>
			</AppBar>
		</ElevationScroll>
	)
}
