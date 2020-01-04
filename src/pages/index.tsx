import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import MuiLink from '@material-ui/core/Link'
import NextLink from 'next/link'

import Layout from '../components/Layout'

import React from 'react'

export default function Index(): JSX.Element {
	return (
		<Layout>
			<Container maxWidth="sm">
				<Box my={4}>
					<NextLink href="/about" passHref>
						<MuiLink>Go to the about page</MuiLink>
					</NextLink>
				</Box>
			</Container>
		</Layout>
	)
}
