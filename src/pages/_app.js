import {createTheme, NextUIProvider} from "@nextui-org/react"
import React, { useEffect, useState } from 'react';
import { getDocumentTheme } from '@nextui-org/react'


// 2. Call `createTheme` and pass your custom theme values
const lightTheme  = createTheme({
    type: "light",
    theme: {
        colors: {
            primary: '#4a5ede',
            secondary: '#F9CB80',
            error: '#FCC5D8',
            success: '#de994a',
            warning: '#F9CB80',
            gradient: 'linear-gradient(90deg, #4a5ede 0%, #F9CB80 100%)',
            background: 'rgba(255,255,255,0.71)',
        },
        font: {
            family: 'Roboto, sans-serif',
        },
    }
})

const darkTheme   = createTheme({
    type: "dark",
    theme: {
        colors: {
            primary: '#de4ad7',
            secondary: '#F9CB80',
            error: '#FCC5D8',
            success: '#de994a',
            warning: '#F9CB80',
            gradient: 'linear-gradient(90deg, #4a5ede 0%, #F9CB80 100%)',
            background: '#282828'
        },
        font: {
            family: 'Roboto, sans-serif',
        },
    }
})


const Main = ({Component, pageprops}) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // you can use any storage
        let theme = window.localStorage.getItem('data-theme');
        setIsDark(theme === 'dark');

        const observer = new MutationObserver(() => {
            let newTheme = getDocumentTheme(document?.documentElement);
            setIsDark(newTheme === 'dark');
        });

        // Observe the document theme changes
        observer.observe(document?.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme', 'style']
        });

        return () => observer.disconnect();
    }, []);

    return (

        <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
            <Component {...pageprops}/>
        </NextUIProvider>
    )
}


export default Main