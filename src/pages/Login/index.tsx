import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import styles from './styles'

const LoginPage = () => {
  return (
    <Box component="div" sx={styles.container}>
      <Box component="form" sx={{ minWidth: 320, p: 2, borderRadius: 1, bgcolor: 'form.background', color: 'form.color' }}>
        <Typography sx={{ textAlign: 'center' }} component="h2" variant="h5" gutterBottom>
          Login
        </Typography>
      </Box>
    </Box>
  )
}

export default LoginPage