import { Typography } from '@material-ui/core'
import MuiLink from '@material-ui/core/Link'
import React from 'react'

export default function Copyright(): JSX.Element {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<MuiLink color="inherit" href="https://github.com/ImpactDevelopment/">
				Impact Development
			</MuiLink>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}
