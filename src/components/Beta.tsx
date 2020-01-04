import { AppBar, Container, Link as MuiLink, makeStyles, Typography } from '@material-ui/core'
import NextLink from 'next/link'

import React from 'react'

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.error.dark,
	},
	link: {
		color: theme.palette.warning.light,
	},
}))

export default function Beta(): JSX.Element {
	const classes = useStyles()

	return (
		<AppBar position="static" className={classes.root}>
			<Container maxWidth="md">
				<Typography>
					{/*TODO: update wording as stability progresses*/}
					{'The new impactclient.net is still in a very early stage of development. '}
					<NextLink href="//impactclient.net" passHref>
						<MuiLink className={classes.link}>Click here</MuiLink>
					</NextLink>
					{' to return to the stable website.'}
				</Typography>
			</Container>
		</AppBar>
	)
}
