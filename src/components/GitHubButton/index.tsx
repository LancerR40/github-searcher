import React from 'react'
import Button from '@mui/material/Button'
import GitHub from '@mui/icons-material/GitHub'

const GitHubButton = () => {
  return (
    <Button
      sx={{ bgcolor: '#1976D2', color: '#fff' }}
      variant="contained" 
      startIcon={<GitHub />}
      size='large'
      disableElevation
      fullWidth
    >
      LogIn with GitHub
    </Button>
  )
}

export default GitHubButton