import React, {useEffect, useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import {Container, Text, useTheme, Button} from "@nextui-org/react";
import timeGridPlugin from '@fullcalendar/timegrid'
import {formatEventsForFullCalendar} from "@/clientServices/formatEvents";
import {ModalAgregar} from "@/components/modal";



export default function Calendar() {

    const [events, setEvents] = useState(null)
    const [eventsR, setEventosR] = useState(null);
    const [eventsI, setEventosI] = useState(null);

    const fetchEvents = async () => {
        const fetchData = async () => {
            const res = await fetch('/api/eventosI/1')
            const json = await res.json()
            setEvents(json.eventos)
            const [eventsI, eventsR] = formatEventsForFullCalendar(json.eventos)
            setEventosI(eventsI)
            setEventosR(eventsR)
        };
        await fetchData()
    }

    useEffect(
        () => {
            fetchEvents()
        },[]
    )

    const {theme} = useTheme();
    const [modal1, setVisible1] = useState(false);
    const [id, setId] = useState(null);

    const [edit, setEdit] = useState(false);
    const clickOnEvent = (info) => {
        setId(info.event.id)
        setEdit(true)
        setVisible1(true)
    }


    return (
        <>
            <Container display={"flex"} direction={"row"} justify={"space-between"} alignItems={"center"}>
                <Text h1 style={
                    {
                        color: theme.colors.primary,
                        fontSize: '2rem',
                        fontWeight: 'bold',
                    }
                }>Calendar</Text>
                <Button onPress={()=> {
                    setVisible1(true)
                    setEdit(false)
                }}
                >Agregar Evento</Button>
            </Container>
            <ModalAgregar
                toOpen={modal1} funcClose={()=>{setVisible1(false)}} editar={edit}
                eventos={events} id={id} setId={setId} fetchEvents={fetchEvents} setEditar={setEdit}
                isSuscripcion={false}
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
                            events: eventsI,
                            color: theme.colors.primary.value,
                            textColor: 'white'
                        },
                        {
                            events: eventsR,
                            color: theme.colors.secondary.value,
                            textColor: 'white'
                        }
                    ]
                }
                eventClick={clickOnEvent}
            />

        </>
    )
}


