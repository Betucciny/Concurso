import {Navbar, Link, Container, Button, Text, Spacer, Dropdown, Avatar} from "@nextui-org/react";
import {BiCube} from "react-icons/bi";
import {RxAvatar} from "react-icons/rx";
import {useEffect, useState} from "react";
import React from "react";


function Top({user}) {
    const tipo = !user ? null : user.tipo;
    const pages = [
        {name: 'Inicio', href: '/'},
        {name: 'Calendario', href: '/calendar'},
        {name: tipo === "profesor" ? "Clases" : "Clubs", href: '/suscripciones'},
    ]

    const mainPages = pages.slice(0, 3);

    const sessionOptions = [
        {name: 'Iniciar sesión', href: '/login'},
        {name: 'Registrarse', href: '/register'},
    ]

    const options = () => {
        return (
            <Dropdown.Menu style={{minWidth: '10rem'}}>
                {sessionOptions.map((option, index) => (
                    <Dropdown.Item
                        key={index}
                        onClick={() => {
                            console.log(option.href)
                        }
                        }
                    >
                        {option.name}
                    </Dropdown.Item>
                ))
                }
            </Dropdown.Menu>
        )
    }

    const userOptions = () => {
        return (
            <Dropdown.Menu style={{minWidth: '10rem'}}>
                <Dropdown.Item key={'nombre'} css={{height: "$20"}}>
                    <Text>{'Bienvenido: '}</Text>
                    <Text color={'primary'}>{user.nombre}</Text>
                </Dropdown.Item>
                <Dropdown.Item key={'perfil'} >
                    <Link href={'/'}>Perfil</Link>
                </Dropdown.Item>
                <Dropdown.Item key={'logout'} >
                    <Link href={'/'}>Cerrar sesión</Link>
                </Dropdown.Item>
            </Dropdown.Menu>
        )
    }

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
                                onPress={() => {
                                    window.location.href = page.href
                                }}
                                auto
                                color={"gradient"}
                                ghost
                                style={{minWidth: "8rem", marginRight: 3, marginLeft: 3}}
                            >
                                {page.name}
                            </Button>
                        </li>
                    ))}

                </Navbar.Content>
                <Navbar.Brand>
                    <Link href='/'>
                        <Text size={'2rem'}>ClassWave &lt;<BiCube/>/&gt; </Text>
                    </Link>
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
                <Dropdown>
                    <Dropdown.Trigger>
                        <Avatar
                            icon={<RxAvatar size={40}/>}
                            size={'xl'}
                            pointer
                            squared
                            bordered
                            zoomed
                        />
                    </Dropdown.Trigger>
                        {!user ?
                            options()
                         :
                            userOptions()
                            }
                </Dropdown>
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
        <Container as={'footer'}>
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
            <Text color={'primary'}>© 2021 ClassWave</Text>
        </Container>

    )
}




export default function MainLayout({children}) {
    const [userSelected, setUserSelected] = useState(1);

    const renderChildren = () => {
        return React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                user: userData,
            });
        });
    }

    async function fetchData() {
        if (userSelected === 1) {
            const res = await fetch('/api/usuarios/1');
            const data = await res.json();
            setUserData(data.usuario);
        } else {
            const res = await fetch('/api/usuarios/3');
            const data = await res.json();
            setUserData(data.usuario);
        }
    }

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetchData();
    }, [userSelected]);

    return (
        <>
            <Top user={userData}/>
            <Container as="main">
                {renderChildren()}
            </Container>
            <Spacer></Spacer>
            <Footer/>
            <Container
                display='flex'
                direction='row'
                alignContent='space-between'
            >
                <Text size="$xs" style={{marginRight: '3rem'}}>Usuario seleccionado= {userSelected}</Text>
                <Switch size="xs" style={{marginRight: '3rem'}} onChange={() => {
                    setUserSelected(userSelected === 1 ? 3 : 1)
                }}
                />
                <Text size="$xs">Esta solo es una Demo, esta predispuesta a Cambios y las funcionalidades pueden cambiar</Text>

            </Container>
            <Text size="$xs" style={{marginRight: '3rem'}}>Realizado por Roberto Ángel Herrera Rodríguez</Text>
        </>
    )
}


