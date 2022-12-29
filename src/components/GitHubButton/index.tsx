import React from 'react'
import Button from '@mui/material/Button'
import GitHub from '@mui/icons-material/GitHub'

const CLIENT_ID = 'd96841e286bcfb16867b'
const REDIRECT_URI = 'http://localhost:3000/'

const GitHubButton = () => {
  const link = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`
  return (
    <Button
      sx={{ bgcolor: '#1976D2', color: '#fff' }}
      variant="contained"
      startIcon={<GitHub />}
      size='large'
      href={link}
      disableElevation
      fullWidth
    >
      LogIn with GitHub
    </Button>
  )
}

export default GitHubButton