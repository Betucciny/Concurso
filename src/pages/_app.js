import {createTheme, NextUIProvider} from "@nextui-org/react"
import React, {useEffect, useState} from 'react';
import {getDocumentTheme} from '@nextui-org/react'
import '../styles/globals.css'
import MainLayout from "@/components/layout";



// 2. Call `createTheme` and pass your custom theme values
const lightTheme = createTheme({
    type: "light",
    theme: {
        colors: {
            text: '#000',
            textLight: '#000',
            // primary: Perfecto
            primary: '#4a5ede',
            primaryShadow: '#3e4fc7',
            primaryHover: '#3e4fc7',
            // secondary: podria cambiar
            secondary: '#F9CB80',
            // error: podria cambiar
            error: '#de175e',
            // success: podria cambiar
            success: '#47da37',
            // warning: podria cambiar
            warning: '#f8ae33',
            // gradient: Perfecto
            gradient: 'linear-gradient(90deg, #4a5ede 0%, #F9CB80 100%)',
            // background: Perfecto
            background: 'rgba(252, 251, 252,1)',
            // link: Perfecto
            link: '#4a5ede',

        },
        font: {
            family: 'Roboto, sans-serif',
        },
    }
})


const darkTheme = createTheme({
    type: "dark",
    theme: {
        colors: {
            text: '#fff',
            textLight: '#fff',
            // primary: Perfecto
            primary: '#BB4430',
            primaryShadow: '#a83a1d',
            primarySolidHover: '#dc5f41',
            // secondary: podria cambiar
            secondary: '#73305D',
            // error: podria cambiar
            error: '#ad104c',
            // success: podria cambiar
            success: '#3E87CC',
            // warning: podria cambiar
            warning: '#56396A',
            // gradient: Perfecto
            gradient: 'linear-gradient(90deg, #E73A23 0%, #EF767A 100%)',
            // background: Perfecto
            background: '#101519',
            // link: Perfecto
            link: '#378CE6',

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
            <MainLayout>
                <Component {...pageprops}/>
            </MainLayout>
        </NextUIProvider>
    )
}


export default Main