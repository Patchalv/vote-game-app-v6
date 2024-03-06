'use client';
import { Karla } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const karla = Karla({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: karla.style.fontFamily,
    },
    palette: {
        type: 'light',
        primary: {
            main: '#223743',
        },
        secondary: {
            main: '#27b57b',
        },
        background: {
            default: '#223743',
        },
    },
});

export default theme;
