import {Navbar, Link, Container, Button, Text, Spacer} from "@nextui-org/react";
import {BiCube} from "react-icons/bi";


function Top() {
    const pages = [
        {name: 'Inicio', href: '/'},
        {name: 'Calendario', href: '/calendar'},
        {name: 'Clases', href: '/classes'},
        {name: 'Tareas', href: '/tasks'},
        {name: 'Notas', href: '/notes'},
        {name: 'Contacto', href: '/contact'},


    ]
    const mainPages = pages.slice(0, 3);
    return (
        <SSRProvider>
            <Navbar isBordered variant="sticky" maxWidth={"fluid"} css={{zIndex: 1000}}>
                <Navbar.Toggle title={'toggleNavbar'}/>
                <Navbar.Content
                    hideIn="sm"
                    variant="highlight-rounded"
                >
                    {mainPages.map((page, index) => (
                        <li key={index}>
                            <Button
                                onClick={() => {
                                    window.location.href = page.href
                                }}
                                auto
                                color={"gradient"}
                                ghost
                                style={{minWidth: "10rem", marginRight: 3, marginLeft: 3}}
                            >
                                {page.name}
                            </Button>
                        </li>
                    ))}

                </Navbar.Content>
                <Navbar.Brand>
                    <Link href='/'>
                        <Text h1>ClassWave &lt;<BiCube/>/&gt; </Text>
                    </Link>
                </Navbar.Brand>
                <Navbar.Collapse >
                    {pages.map((page, index) => (
                        <Navbar.CollapseItem key={index}>
                            <Link
                                color='inherit'
                                href={page.href}
                            >
                                {page.name}
                            </Link>
                        </Navbar.CollapseItem>
                    ))}
                </Navbar.Collapse>
            </Navbar>
        </SSRProvider>
    )
}

import {Switch, changeTheme, useTheme} from '@nextui-org/react'
import {SSRProvider} from "@restart/ui/ssr";

const Footer = () => {
    const {type, isDark} = useTheme();

    const handleChange = () => {
        const nextTheme = isDark ? 'light' : 'dark';
        window.localStorage.setItem('data-theme', nextTheme); // you can use any storage
        changeTheme(nextTheme);
    }

    return (
        <Container
            as='footer'
            display='flex'
            direction='row'
            alignContent='space-between'
        >
            <Text>
                The current theme is: {type}
            </Text>

            <Switch
                color={"primary"}

                checked={isDark}
                onChange={handleChange}
                label={isDark ? 'Dark' : 'Light'}
                style={{marginLeft: 'auto'}}
            />
        </Container>
    )
}


export default function MainLayout({children}) {
    return (
        <>
            <Top/>
            <Container as="main">
                {children}
            </Container>
            <Spacer></Spacer>
            <Footer/>
        </>
    )
}