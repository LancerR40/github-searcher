import React, { createContext, useState, useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { PaletteMode } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}
  
interface IAppThemeContext {
  handleThemeMode: () => void,
}

const lightTheme = {
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
  },
  background: {
    default: '#fff',
  },
  form: {
    background: '#f5f5f5',
    color: '#fff',
  },
}

const darkTheme = {
  text: {
    primary: '#fff',
  },
  background: {
    default: '#080c25',
  },
  form: {
    background: '#fff',
    color: '#000',
  },
}

const themeProps = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === ThemeMode.LIGHT ? lightTheme : darkTheme)
  },
})

export const AppThemeContext = createContext<IAppThemeContext | null>(null)

export const AppThemeProvider = ({ children }: { children: JSX.Element }) => {
  /* theme state that indicate the current theme mode */
  const [themeMode, setThemeMode] = useState<PaletteMode>(ThemeMode.DARK)

  /* theme palette */
  const theme = useMemo(() => createTheme(themeProps(themeMode)), [themeMode])

  const handleThemeMode = () => {
    const mode = themeMode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT
    setThemeMode(mode)
  }

  const value = {
    handleThemeMode,
  }

  return (
    <AppThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  )
}