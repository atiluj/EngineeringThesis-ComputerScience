import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        font: {
            main: 'black',
            accent: '#322e2b',
            title: '#6991c8',
        },
        primary: {
            main: '#f6f8fb',
            light: 'white',
            dark: '#cedff69c'
        },
        secondary: {
            main: '#92aed4',
            light: '#adc5e7',
            dark: '#8098c3',
        },
        accent: {
            main: '#322e2b',
            dark: '#8c26d0c9'
        },
        border: {
            article: '#322e2b',
            line: 'black',
        },
        card: {
            background: '#dee2e71c',
            shadow: 'rgba(99, 99, 99, 0.2)'
        }, 
        tools: {
            main: '#cccc',
            dark: '#fcf8f8cc',
        },
        filter: {
            logo: 'brightness(0.2)',
            screen: 'brightness(1)',
        },
        gradient: {
            main: 'linear-gradient(to right, #abdee6, #b9d2f3, #bcbbf1, #c6adf9, #c898fb)',
        },
        element: {
            slider: '#8c26d0c9',
            nav_button_hover: '#94949539',
            exercise_secondary: '#b9d2f3',
            exercise_secondary2: '#94aecf',
            link_hover: '#d08a9a',
            dropdown: '#dee2e71c',
        }
    }
});

export default theme;