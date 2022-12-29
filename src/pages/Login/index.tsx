import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import GitHubButton from '../../components/GitHubButton'
import Divider from '@mui/material/Divider'
import styles from './styles'
import API from '../../api'

const LoginPage = () => {
  const githubLogin = async (code: string) => {
    API.getGitHubAccessToken(code)
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const code = params.get('code')

    if (!code) {
      return
    }

    githubLogin(code)
  }, [])

  return (
    <Box component="div" sx={styles.container}>
      <Box component="form" sx={{ minWidth: { xs: 320, md: 380 }, p: 3, borderRadius: 1, bgcolor: 'form.background', color: 'form.color' }}>
        <Typography sx={{ textAlign: 'center' }} component="h2" variant="h5" gutterBottom>
          Login
        </Typography>
        <Divider sx={{ bgcolor: "primary.light", mb: 2 }} />
        <GitHubButton />
      </Box>
    </Box>
  )
}

export default LoginPage