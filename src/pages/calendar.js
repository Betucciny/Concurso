import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import {Button, Container, Text, useTheme, Dropdown} from "@nextui-org/react";
import MainLayout from "@/components/layout"; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'



export default function () {
    const {theme} = useTheme();
    return (
        <MainLayout>
            <Container display={"flex"} direction={"row"} justify={"space-between"} alignItems={"center"}>
                <Text h1 style={
                    {
                        color: theme.colors.primary,
                        fontSize: '2rem',
                        fontWeight: 'bold',
                    }
                }>Calendar</Text>
                <Dropdown>
                    <Dropdown.Button
                        auto
                        id={'dropdown'}
                        >
                        Opciones
                    </Dropdown.Button>
                    <Dropdown.Menu>
                        <Dropdown.Item id={'agregar'}>Agregar</Dropdown.Item>
                        <Dropdown.Item id={'editar'}>Editar</Dropdown.Item>
                        <Dropdown.Item id={'eliminar'}>Eliminar</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
            <FullCalendar
                plugins={[timeGridPlugin]}
                initialView="timeGridWeek"
                headerToolbar={{
                    left: 'prev,next',
                    center: 'title',
                    right: 'timeGridWeek,timeGridDay'
                }}
                allDaySlot={false}
                height={'75vh'}
                eventSources={
                    [
                        {
                            events: [
                                {
                                    title: 'All Day Event',
                                    start: '2023-05-11:00:00',
                                    end: '2023-05-11:12:00',
                                },
                                {
                                    title: 'Long Event',
                                    start: '2023-05-11:00:00',
                                    end: '2023-05-11:12:00',
                                },
                                ],

                        },
                    ]
                }
            />

        </MainLayout>

    )
}