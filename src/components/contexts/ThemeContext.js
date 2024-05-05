// src/contexts/ThemeContext.js
import React, { createContext, useContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');  // Default theme is light

    const theme = useMemo(() => createTheme({
        palette: {
            type: mode,
            primary: {
                main: mode === 'light' ? '#1976d2' : '#90caf9',
            },
            secondary: {
                main: mode === 'light' ? '#dc004e' : '#f48fb1',
            },
            background: {
                default: mode === 'light' ? '#fff' : '#121212',
            },
        },
    }), [mode]);

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />  // Ensures consistent colors for background and text for material-ui components
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
