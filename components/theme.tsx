import red from '@material-ui/core/colors/red'
import { createMuiTheme } from '@material-ui/core/styles'

// Export a theme instance.
export default createMuiTheme({
	palette: {
		primary: {
			main: '#2196F3',
		},
		secondary: {
			main: '#039be5',
		},
		type: 'dark',
		error: {
			main: red.A400,
		},
	},
})
