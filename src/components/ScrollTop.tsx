import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Fab, useScrollTrigger, Zoom } from '@material-ui/core'

import React from 'react'

interface Props {
	children: JSX.Element
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			position: 'fixed',
			bottom: theme.spacing(2),
			right: theme.spacing(2),
		},
	})
)

function handleClick(): void {
	const first = document.body.firstElementChild

	first?.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
		inline: 'start',
	})
}

export default function ScrollTop({ children }: Props): JSX.Element {
	const classes = useStyles()
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	})

	return (
		<Zoom in={trigger}>
			<div onClick={handleClick} role="presentation" className={classes.root}>
				<Fab color="secondary" size="small" aria-label="scroll back to top">
					{children}
				</Fab>
			</div>
		</Zoom>
	)
}
