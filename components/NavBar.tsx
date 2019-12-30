import { AppBar, Button, IconButton, Link, makeStyles, Toolbar } from '@material-ui/core'
import React, { useContext } from 'react'
import { InvertColors } from '@material-ui/icons'

import ElevationScroll from './ElevationScroll'
import { AppContext } from './AppContext'

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
					<Link href="/" variant="h5" color="inherit">
						{props.title}
					</Link>
					<div className={classes.grow} />
					<Button component="a" href="/about" color="inherit" className={classes.navLink}>
						About
					</Button>
					<IconButton color="inherit" onClick={toggleTheme}>
						<InvertColors />
					</IconButton>
				</Toolbar>
			</AppBar>
		</ElevationScroll>
	)
}
