import { AppBar, ButtonBase, Fab, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import Link from 'next/link'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Head from 'next/head'
import React, { useContext } from 'react'
import { InvertColors } from '@material-ui/icons'

import ElevationScroll from './ElevationScroll'
import ScrollTop from './ScrollTop'
import Copyright from './Copyright'
import { AppContext } from './AppContext'

interface Props {
	children: React.ReactElement
	title?: string
}

const useStyles = makeStyles(theme => ({
	grow: {
		flexGrow: 1,
	},
	navLink: {
		marginLeft: theme.spacing(2),
	},
}))

export default function Layout({ children, title = 'Impact' }: Props): JSX.Element {
	const { themeType, setThemeType } = useContext(AppContext)
	const classes = useStyles()

	const toggleTheme = (): void => {
		if (setThemeType) {
			setThemeType(themeType === 'dark' ? 'light' : 'dark')
		}
	}
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
						<div className={classes.grow} />
						<IconButton color="inherit" onClick={toggleTheme}>
							<InvertColors />
						</IconButton>
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
