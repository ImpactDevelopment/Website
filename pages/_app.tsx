import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import App from 'next/app'
import Head from 'next/head'
import React from 'react'

import theme from '../components/theme'

// `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
// This allows for keeping state between navigation, custom error handling, injecting additional data.
export default class MyApp extends App {
	componentDidMount(): void {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement!.removeChild(jssStyles)
		}
	}

	render(): JSX.Element {
		const { Component, pageProps } = this.props

		return (
			<>
				<Head>
					{/* https://err.sh/next.js/no-document-title */}
					<title>My new cool app</title>
				</Head>
				<ThemeProvider theme={theme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</>
		)
	}
}
