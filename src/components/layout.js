import {Navbar, Link, Container, Button, Text, Spacer} from "@nextui-org/react";


function Top() {
    const pages = [
        {name: 'Inicio', href: '/'},
        {name: 'Calendario', href: '/calendar'},

    ]

    return (
        <Navbar isBordered variant="sticky" maxWidth={"fluid"}>
            <Navbar.Toggle showIn='sm' title={'toggleNavbar'}/>
            <Navbar.Content
                hideIn="sm"
                variant="highlight-rounded"
            >
                {pages.map((page, index) => (
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
            <Navbar.Brand href='/'>
                Advancio
            </Navbar.Brand>
            <Navbar.Collapse>
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
    )
}

import {Switch, changeTheme, useTheme} from '@nextui-org/react'

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
            <Text  >
                The current theme is: {type}
            </Text>

            <Switch
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
            <Spacer ></Spacer>
            <Footer/>
        </>
    )
}