interface Page {
	title: string
	path: string
}

// TODO construct from a directory listing?
// Something along the lines of https://github.com/mui-org/material-ui/blob/b6182ce/docs/src/modules/utils/find.js#L83
const pages: Page[] = [
	{
		title: 'Donate',
		path: '/donate',
	},
	{
		title: 'About',
		path: '/about',
	},
]

export default pages
