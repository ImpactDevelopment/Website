import { createMuiTheme, Theme, PaletteType } from '@material-ui/core'
import { red, blue, deepPurple } from '@material-ui/core/colors'

export default function makeTheme(type: PaletteType): Theme {
	return createMuiTheme({
		palette: {
			primary: blue,
			secondary: deepPurple,
			type,
			error: {
				main: red.A400,
			},
		},
	})
}
