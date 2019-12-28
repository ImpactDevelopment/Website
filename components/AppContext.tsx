import { PaletteType } from '@material-ui/core'
import { createContext } from 'react'

interface AppContextStructure {
	themeType: PaletteType
	setThemeType: (type: PaletteType) => void
}

export const AppContext = createContext<Partial<AppContextStructure>>({})
