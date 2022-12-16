import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CssBaseline from '@mui/material/CssBaseline';
import App from './App'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('HTML root div does not exist.')
}

const root = createRoot(rootElement)
root.render(
  <>
    <CssBaseline />
    <App />
  </>
)