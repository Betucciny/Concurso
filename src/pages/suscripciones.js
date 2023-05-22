import {Button, Spacer, Text, Container} from "@nextui-org/react";
import {Suscripcion, SuscripcionItems} from "@/components/suscripciones";
import React, {useEffect, useState} from "react";
import {ModalEventos} from "@/components/modal";


export default function Suscripciones({user}) {
    const [suscripciones, setSuscripciones] = useState([])
    const [id, setId] = useState(null)
    const [id_suscripcion, setIdSuscripcion] = useState(null)
    const [edit, setEdit] = useState(false)
    const [visible1, setVisible1] = useState(false)
    const [eventos, setEventos] = useState([])

    const tipo = !user ? null : user.tipo;

    const fetchData = async () => {
        if (user === null) return
        const res = await fetch('/api/suscripciones/' + user.id)
        const json = await res.json()
        return json.suscripcion
    };

    const fetchEvents = async () => {
        const suscrip = await fetchData()
        if (user === null) return
        const eventos = suscrip.flatMap(objeto => objeto.eventos)
        setEventos(eventos)
    }

    const fetchSuscripciones = async () => {
        if (user === null) return
        setSuscripciones(await fetchData())
    }

    useEffect(
        () => {
            fetchSuscripciones()
            fetchEvents()
        },
        [user]
    )

    useEffect(
        () => {
            fetchSuscripciones()
        },
        [eventos]
    )

    const clickOnEvent = (id) => {
        setId(id)
        setEdit(true)
        setVisible1(true)
    }

    const agregarSuscripcion = () => {
        // TODO agregar suscripcion
    }

    return (
        <>
            <Text h1 color={'primary'}>{(tipo==='profesor') ? 'Clases' : 'Clubs'}</Text>
            <Suscripcion>
                {suscripciones.length === 0 && (
                    <Container>
                        <Text>No hay suscripciones</Text>
                        <Text>Para agregar una suscripcion, presione el boton de abajo</Text>
                    </Container>
                )}
                {suscripciones.map((suscripcion, index) => (
                    <SuscripcionItems key={index} eventos={suscripcion.eventos} idSuscripcion={suscripcion.id}
                                      title={suscripcion.nombre} clickonEvent={clickOnEvent}
                                      clikOnAgregar={() => {
                                          setIdSuscripcion(suscripcion.id)
                                          setVisible1(true)
                                          setEdit(false)
                                      }}
                    />
                ))}
            </Suscripcion>
            <Spacer y={1}/>
            <Button color={'success'} onPress={agregarSuscripcion}>Agregar suscripcion</Button>
            <ModalEventos
                toOpen={visible1} funcClose={() => {
                setVisible1(false)
            }} editar={edit}
                eventos={suscripciones.flatMap(objeto => objeto.eventos)} id={id} setId={setId}
                fetchEvents={fetchEvents} setEditar={setEdit}
                idSuscripcion={id_suscripcion}
            />
        </>
    )
}