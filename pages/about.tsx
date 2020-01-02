import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import NextLink from 'next/link'
import MuiLink from '@material-ui/core/Link'

import Staff from '../components/Staff'
import Layout from '../components/Layout'

import React from 'react'

export default function About(): JSX.Element {
	return (
		<Layout>
			<Container maxWidth="sm">
				<Box my={4}>
					<NextLink href="/" passHref>
						<MuiLink>Go to the main page</MuiLink>
					</NextLink>
					<Staff />
				</Box>
			</Container>
		</Layout>
	)
}
