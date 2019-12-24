import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import MuiLink from '@material-ui/core/Link'

import ProTip from '../components/ProTip'
import Staff from '../components/Staff'
import Layout from '../components/Layout'

export default function About(): JSX.Element {
	return (
		<Layout>
			<Container maxWidth="sm">
				<Box my={4}>
					<MuiLink href="/">Go to the main page</MuiLink>
					<Staff />
					<ProTip />
				</Box>
			</Container>
		</Layout>
	)
}
