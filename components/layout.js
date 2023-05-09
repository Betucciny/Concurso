import {Navbar, Link, Container, Button, Text} from "@nextui-org/react";


function Header() {
    const pages = [
        {name: 'Gremio', href: '/', id: 0},
        {name: 'Tablón de Desafios ', href: '/desafios', id: 1},
        {name: 'Agenda de Expediciones', href: '/expediciones', id: 2},
        {name: 'Ranking', href: '/rainking', id: 3},
        {name: 'Boveda', href: '/boveda', id: 4},
    ]

    return (
        <Navbar isBordered variant="sticky">
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
            <Header/>
            <Container as="main">
                {children}
            </Container>
            <Footer/>
        </>
    )
}