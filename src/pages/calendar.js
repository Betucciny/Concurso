import React, {useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import {Container, Text, useTheme, Dropdown, Button} from "@nextui-org/react";
import timeGridPlugin from '@fullcalendar/timegrid'
import {SSRProvider} from '@restart/ui/ssr'
import {ModalAgregar} from "@/components/modal";


export default function Calendar({events}) {
    const {theme} = useTheme();

    const [modal1, setVisible1] = useState(false);

    const [eventosC, setEventosC] = useState(events);

    const [eventosCalendar, setEventosCalendar] = useState([
        {
            title: 'All Day Event',
            start: '2023-05-16T16:00:00',
            end: '2023-05-16T20:00:00',
        },
        {
            title: 'Long Event',
            start: '2023-05-16T16:00:00',
            end: '2023-05-16T18:00:00',
        },
    ],);

    const clickOnEvent = (info) => {
        console.log(info.event.type);
    }


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
                <Button onPress={()=>setVisible1(true)}>Agregar Evento</Button>
            </Container>
            <ModalAgregar
                toOpen={modal1} funcClose={()=>{setVisible1(false)}}
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
                            events: eventos,
                            color: 'red',
                            textColor: 'black'
                        },
                    ]
                }
                eventClick={clickOnEvent}
            />

        </SSRProvider>
    )
}