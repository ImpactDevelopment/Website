import MuiLink from '@material-ui/core/Link'
import NextLink from 'next/link'

import Layout from '../components/Layout'

import React from 'react'

export default function Index(): JSX.Element {
	return (
		<Layout>
			<NextLink href="/about" passHref>
				<MuiLink>Go to the about page</MuiLink>
			</NextLink>
		</Layout>
	)
}
