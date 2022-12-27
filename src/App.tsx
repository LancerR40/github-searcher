import React from 'react'

import Box from '@mui/material/Box'
import Header from './components/header'

/* Pages components */
import LoginPage from './pages/Login'

const App = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Box sx={{ flex: 1 }}>
        <LoginPage />
      </Box>
    </Box>
  )
}

export default App