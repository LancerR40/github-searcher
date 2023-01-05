import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { AppThemeProvider } from './contexts/theme'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('HTML root div does not exist.')
}

const root = createRoot(rootElement)


root.render(
  <AppThemeProvider>
    <App />
  </AppThemeProvider>
)

if (module.hot) {
  module.hot.accept('./App.tsx')
}