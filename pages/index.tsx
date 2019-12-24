import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { Link } from '@material-ui/core'

import Layout from '../components/Layout'
import ProTip from '../components/ProTip'

export default function Index(): JSX.Element {
	return (
		<Layout>
			<Container maxWidth="sm">
				<Box my={4}>
					<Link href="/about" color="secondary">
						Go to the about page
					</Link>
					<ProTip />
				</Box>
			</Container>
		</Layout>
	)
}
