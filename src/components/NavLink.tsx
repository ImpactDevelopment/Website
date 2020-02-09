import { Button } from '@material-ui/core'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import React from 'react'

interface Props {
	href: string
	className?: string
	children: React.ReactNode
}

export default function NavLink({ href, children, className = '' }: Props): JSX.Element {
	// If the link is for the current page, return a disabled button
	if (href === useRouter().pathname) {
		return (
			<Button component="span" color="inherit" className={className} disabled>
				{children}
			</Button>
		)
	}

	return (
		<NextLink href={href} passHref>
			<Button component="a" color="inherit" className={className}>
				{children}
			</Button>
		</NextLink>
	)
}
