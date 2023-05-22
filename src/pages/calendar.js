import React, {useEffect, useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import {Container, Text, useTheme, Button, Modal} from "@nextui-org/react";
import timeGridPlugin from '@fullcalendar/timegrid'
import {formatEventsForFullCalendar} from "@/clientServices/formatEvents";
import {ModalEventos} from "@/components/modal";



export default function Calendar({user}) {

    const [events, setEvents] = useState(null)
    const [eventsR, setEventosR] = useState(null);
    const [eventsI, setEventosI] = useState(null);
    const [eventsS, setEventsS] = useState([]);

    const fetchEvents = async () => {
        if (user === null) return
        const fetchData = async () => {
            const res = await fetch('/api/eventosI/' + user.id)
            const json = await res.json()
            const eventos = json.eventos
            const [eventsI, eventsR] = formatEventsForFullCalendar(json.eventos)
            setEventosI(eventsI)
            setEventosR(eventsR)
            const res2 = await fetch('/api/eventosSuscrito/' + user.id)
            const json2 = await res2.json()
            const suscripciones = json2.suscripcion
            eventos.push(...suscripciones.flatMap(objeto => objeto.eventos))
            setEvents(eventos)
            const eventosSus = []
            for(let i = 0; i < suscripciones.length; i++){
                const [eventsI, eventsR] = formatEventsForFullCalendar(suscripciones[i].eventos)
                eventosSus.push(eventsI)
                eventosSus.push(eventsR)
            }
            setEventsS(eventosSus)
        };
        await fetchData()
    }

    useEffect(
        () => {
            fetchEvents ()
        },[user]
    )

    const {theme} = useTheme();
    const [modal1, setVisible1] = useState(false);
    const [id, setId] = useState(null);
    const [edit, setEdit] = useState(false);

    const clickOnEvent = (info) => {
        const isSuscripcion = events.find(event => event.id === Number(info.event.id)).tipo_evento === 'suscripcion'
        if(isSuscripcion){
            setVisible(true)
            return
        }
        setId(info.event.id)
        setEdit(true)
        setVisible1(true)
    }

    const colores = [
        theme.colors.yellow500.value,
        theme.colors.green500.value,
        theme.colors.blue500.value,
        theme.colors.purple500.value,
        theme.colors.red500.value,
    ]

    const eventsSuscripciones = eventsS.map(
        (coleccionEventos, index) => {
            return {
                events: coleccionEventos,
                color: colores[index % colores.length],
                textColor: theme.colors.text.value
            }
        }
    )



    const eventSources = [
        {
            events: eventsI,
            color: theme.colors.blue300.value,
            textColor: theme.colors.text.value,
            borderColor: theme.colors.red900.value,
        },
        {
            events: eventsR,
            color: theme.colors.green300.value,
            textColor: theme.colors.text    .value,
            borderColor: theme.colors.red900.value,
        },
        ...eventsSuscripciones]


    const [modal, setVisible] = useState(false);


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
            <ModalEventos
                toOpen={modal1} funcClose={()=>{setVisible1(false)}} editar={edit}
                eventos={events} id={id} setId={setId} fetchEvents={fetchEvents} setEditar={setEdit} idUsuario={!!user ? user.id : null}
                idSuscripcion={null}
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
                slotDuration={'00:15:00'}
                slotMinTime={'06:00:00'}
                height={'70vh'}
                titleFormat={{year: 'numeric', month: 'long', day: 'numeric'}}
                eventSources={
                    eventSources
                }
                eventClick={clickOnEvent}
            />
            <Modal closeButton open={modal} onClose={()=>{
                setVisible(false);
                }}>
                <Modal.Header>
                    <Text h3 id={"modal-title"}>Evento de suscripción</Text>
                </Modal.Header>
                <Modal.Body>
                    <Text>Este evento es parte de una suscripción, no puede ser editado</Text>
                </Modal.Body>
            </Modal>
        </>
    )
}


