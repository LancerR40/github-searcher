import React, { createContext, useState, useEffect, useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { PaletteMode } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
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
}

const darkTheme = {
  text: {
    primary: '#fff',
  },
  background: {
    default: '#080c25',
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

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  useEffect(() => {
    handleInitialThemeMode()
  }, [])

  const handleInitialThemeMode = () => {
    const mode = window.localStorage.getItem('themeMode') as ThemeMode

    if (!mode) {
      const mode = prefersDarkMode ? ThemeMode.DARK : ThemeMode.LIGHT
      return updateThemeMode(mode)
    }

    updateThemeMode(mode)
  }
  
  const handleThemeMode = () => {
    const mode = themeMode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT
    updateThemeMode(mode)
  }

  const updateThemeMode = (themeMode: ThemeMode) => {
    window.localStorage.setItem('themeMode', themeMode)
    setThemeMode(themeMode)
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