import React, { useContext } from 'react'
import { useTheme } from '@mui/material/styles'
import { AppThemeContext } from '../../contexts/theme'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import styles from './styles'
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

const Header = () => {
  const theme = useTheme()
  const themeContext = useContext(AppThemeContext)
  const noAuthPages = ['Home']

  return (
    <AppBar position="static" color='transparent' elevation={1}>
      <Container sx={{ px: { xs: 4, lg: 0 } }} maxWidth="lg" disableGutters>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <GitHubIcon sx={styles.icon} fontSize='large' />
            <Typography sx={styles.title} component="h1" variant="h5">GITHUB SEARCH</Typography>
          </Box>
          <Box sx={styles.linkButtonContainer}>
            {noAuthPages.map((page) => (
              <Button key={page} sx={styles.linkButton}>
                {page}
              </Button>
            ))}
            <AccountCircleIcon fontSize="large" />
          </Box>
          <Box>
            <IconButton sx={{ ml: 1 }} color="inherit" onClick={themeContext?.handleThemeMode}>
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header