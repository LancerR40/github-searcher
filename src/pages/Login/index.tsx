import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import GitHubButton from '../../components/GitHubButton'
import Divider from '@mui/material/Divider'
import styles from './styles'

const LoginPage = () => {
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