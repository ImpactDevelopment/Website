import { Button, makeStyles } from '@material-ui/core'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import React from 'react'

interface Props {
	href: string
	children: React.ReactNode
}

const useStyles = makeStyles(theme => ({
	button: {
		marginLeft: theme.spacing(2),
	},
}))

export default function NavLink({ href, children }: Props): JSX.Element {
	const classes = useStyles(undefined)

	if (href === useRouter().pathname) {
		return (
			<Button component="span" color="inherit" className={classes.button} disabled={true}>
				{children}
			</Button>
		)
	}

	return (
		<NextLink href={href} passHref>
			<Button component="a" color="inherit" className={classes.button}>
				{children}
			</Button>
		</NextLink>
	)
}
