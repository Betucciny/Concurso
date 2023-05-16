import React, {useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import {Container, Text, useTheme, Dropdown, Button} from "@nextui-org/react";
import timeGridPlugin from '@fullcalendar/timegrid'
import {SSRProvider} from '@restart/ui/ssr'
import {ModalAgregar} from "@/components/modal";


export default function Calendar() {
    const {theme} = useTheme();

    const [modal1, setVisible1] = useState(false);
    const [modal2, setVisible2] = useState(false);
    const [modal3, setVisible3] = useState(false);
    const handler1 = () => setVisible1(true);
    const closeHandler1 = () => {
        setVisible1(false);
    };

    const handler2 = () => setVisible2(true);
    const closeHandler2 = () => {
        setVisible2(false);
    };

    const handler3 = () => setVisible3(true);
    const closeHandler3 = () => {
        setVisible3(false);
    };


    return (
        <SSRProvider>
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
                        color={'primary'}
                    >
                        Opciones
                    </Dropdown.Button>
                    <Dropdown.Menu>
                        <Dropdown.Item id={'agregar'} textValue={'agregar'}>
                            <Button onPress={handler1} light>Agregar</Button>
                        </Dropdown.Item>
                        <Dropdown.Item id={'editar'} textValue={'editar'}>
                            <Button onPress={handler2} light>Editar</Button>
                        </Dropdown.Item>
                        <Dropdown.Item id={'eliminar'} textValue={'eliminar'}>
                            <Button onPress={handler3} light>Eliminar</Button>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
            <ModalAgregar
                toOpen={modal1} funcClose={closeHandler1}
            />

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
                titleFormat={{year: 'numeric', month: 'long', day: 'numeric'}}
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

        </SSRProvider>
    )
}