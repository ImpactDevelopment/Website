import { AppBar, Button, IconButton, makeStyles, Toolbar } from '@material-ui/core'
import NextLink from 'next/link'
import { InvertColors } from '@material-ui/icons'
import MuiLink from '@material-ui/core/Link'

import ElevationScroll from './ElevationScroll'
import AppContext from './AppContext'

import React, { useContext } from 'react'

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
	const { themeType, setThemeType } = useContext(AppContext)
	const classes = useStyles()

	const toggleTheme = (): void => {
		if (setThemeType) {
			setThemeType(themeType === 'dark' ? 'light' : 'dark')
		}
	}

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
					<NextLink href="/about" passHref>
						<Button component="a" color="inherit" className={classes.navLink}>
							About
						</Button>
					</NextLink>
					<IconButton color="inherit" onClick={toggleTheme}>
						<InvertColors />
					</IconButton>
				</Toolbar>
			</AppBar>
		</ElevationScroll>
	)
}
