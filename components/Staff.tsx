import { createStyles, GridList, GridListTile, GridListTileBar, makeStyles, Paper, Theme } from '@material-ui/core'

import React from 'react'

enum Role {
	HeadDeveloper = 'Head Developer',
	Developer = 'Developer',
	Moderator = 'Moderator',
	Support = 'Support',
}

export interface GitHubUser {
	name: string
	blurb?: string
	github: string
	role: Role
}

// TODO load from json or something
const staffList: GitHubUser[] = [
	{
		name: 'Brady',
		github: 'ZeroMemes',
		role: Role.HeadDeveloper,
		blurb: 'Brady is the origonal developer of Impact, over 90% of the code has been dumped out of his anus.',
	},
	{
		name: 'LeafHacker',
		github: 'LeafHacker',
		role: Role.Developer,
		blurb: 'Leaf has been contributing to the Impact community since 2.7 and has helped with development since 4.1',
	},
	{
		name: 'leijurv',
		github: 'leijurv',
		role: Role.Developer,
		blurb:
			"leijurv created baritone, the advanced AI for minecraft. In his spare time he fixes Leaf's and Brady's Impact bugs",
	},
	{ name: 'Scandal', github: 'ScanmanTM', role: Role.Moderator },
	{ name: 'Peanut', github: 'zPeanut', role: Role.Support },
]

function tileSize(role: Role): number {
	switch (role) {
		case Role.HeadDeveloper:
			return 4
		case Role.Developer:
			return 2
		default:
			return 1
	}
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
			overflow: 'hidden',
			backgroundColor: theme.palette.background.paper,
			padding: theme.spacing(1),
		},
		gridList: {
			width: 600,
		},
		icon: {
			color: 'rgba(255, 255, 255, 0.54)',
		},
	})
)

export default function Staff(): JSX.Element {
	const classes = useStyles()
	const size = 100

	return (
		<Paper className={classes.root}>
			<GridList cellHeight={size} spacing={4} cols={4} className={classes.gridList}>
				{staffList.map((staff: GitHubUser, index: number) => (
					<GridListTile key={index} cols={tileSize(staff.role)} rows={tileSize(staff.role)}>
						<img src={`https://avatars.githubusercontent.com/${staff.github}?s=${size * tileSize(staff.role)}`} />
						<GridListTileBar title={staff.name} subtitle={staff.role} />
					</GridListTile>
				))}
			</GridList>
		</Paper>
	)
}
