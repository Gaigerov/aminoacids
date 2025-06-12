import * as React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import {ThemeProvider} from '@mui/material/styles'
import {theme} from './styles/theme'
import './styles/global.css'
import CssBaseline from '@mui/material/CssBaseline'

const container = document.getElementById('root')
if (container) {
    const root = createRoot(container)
    root.render(
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </React.StrictMode>
    )
}
