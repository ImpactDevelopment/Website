import NextLink from 'next/link'
import MuiLink from '@material-ui/core/Link'

import Staff from '../components/Staff'
import Layout from '../components/Layout'

import React from 'react'

export default function About(): JSX.Element {
	return (
		<Layout>
			<NextLink href="/" passHref>
				<MuiLink>Go to the main page</MuiLink>
			</NextLink>
			<Staff />
		</Layout>
	)
}
