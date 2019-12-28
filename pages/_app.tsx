import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { PaletteType } from '@material-ui/core'

import makeTheme from '../components/theme'
import { AppContext } from '../components/AppContext'

interface State {
	themeType: PaletteType
}

// `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
// This allows for keeping state between navigation, custom error handling, injecting additional data.
export default class MyApp extends App {
	state: State = {
		themeType: 'dark',
	}

	// this is an arrow function because `this` is overwritten by the class.
	setThemeType = (type: PaletteType): void => {
		this.setState({
			...this.state,
			themeType: type,
		})
	}

	componentDidMount(): void {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement!.removeChild(jssStyles)
		}
	}

	render(): JSX.Element {
		const { Component, pageProps } = this.props
		const theme = makeTheme(this.state.themeType)

		return (
			<>
				<Head>
					{/* https://err.sh/next.js/no-document-title */}
					<title>Impact</title>
					<meta name="theme-color" content={theme.palette.primary.main} />
				</Head>
				<ThemeProvider theme={theme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<AppContext.Provider
						value={{
							themeType: this.state.themeType,
							setThemeType: this.setThemeType,
						}}
					>
						<Component {...pageProps} />
					</AppContext.Provider>
				</ThemeProvider>
			</>
		)
	}
}
