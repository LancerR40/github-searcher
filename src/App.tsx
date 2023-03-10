import React from 'react'
import useScreen from './hooks/useScreen'

import Box from '@mui/material/Box'
import Header from './components/Header'

/* Pages components */
import HomePage from './pages/Home'

const App = () => {
  const { height } = useScreen()
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height }}>
      <Header />
      <Box sx={{ flex: 1 }}>
        <HomePage />
      </Box>
    </Box>
  )
}

export default App