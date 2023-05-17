import {Dropdown, Modal, Text, Container, Button, Input} from "@nextui-org/react";
import React, {useEffect} from "react";
import {getMinutesFromDuration, getYMD} from "@/clientServices/formatEvents";




function ModalAgregar({toOpen, funcClose, editar, eventos, id, setId}) {
    const tipos = {
        'Puntual': 0,
        'Recurrente': 1,
    }

    const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

    const iniciales = {
        dia: new Set([dias[0]]),
        tipo: new Set([Object.keys(tipos)[0]]),
        nombre: '',
        descripcion: '',
        hora: '',
        fecha: '',
        duracion: 0,
    }

    const [tipo, setTipo] = React.useState(iniciales.tipo);
    const [dia, setDia] = React.useState(iniciales.dia);
    const [nombre, setNombre] = React.useState(iniciales.nombre);
    const [descripcion, setDescripcion] = React.useState(iniciales.descripcion);
    const [hora, setHora] = React.useState(iniciales.hora);
    const [fecha, setFecha] = React.useState(iniciales.fecha);
    const [duracion, setDuracion] = React.useState(iniciales.duracion);
    const [error, setError] = React.useState(false);

    useEffect(
        () => {
            if (editar) {
                const evento = eventos.find(element => element.id === Number(id))
                if(!evento){ return }
                setTipo(new Set([evento.recurrencia ? 'Recurrente' : 'Puntual']))
                evento.recurrencia ? setDia(new Set(evento.dia_semana)) : setFecha(getYMD(new Date(evento.fecha)))
                setNombre(evento.titulo)
                setDescripcion(evento.decripcion)
                setHora(evento.hora)
                setDuracion(getMinutesFromDuration(evento.duracion))
            }else {
                setId(null)
            }
        },
        [editar, id]
    )

    const checkRequired = () => {
        if (tipo.size === 0) {
            return false
        }
        if (nombre === '') {
            return false
        }
        if (descripcion === '') {
            return false
        }
        if (hora === '') {
            return false
        }
        if (tipo.has('Puntual') && fecha === '') {
            return false
        }
        if (tipo.has('Recurrente') && dia.size === 0) {
            return false
        }
        return duracion !== 0;

    }

    const agregar = () => {
        if (checkRequired()) {
            setError(false)
            // TODO: Agregar evento
            funcClose()
        }else{
            setError(true)
        }
    }

    return (
        <Modal
            closeButton
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            open={toOpen}
            onClose={()=>{
                setId(null)
                setTipo(new Set([Object.keys(tipos)[0]]))
                setDia(new Set([dias[0]]))
                setNombre('')
                setDescripcion('')
                setHora('')
                setFecha('')
                setDuracion(0)
                setError(false)
                funcClose()
            }}
        >
            <Modal.Header>
                <Text h3 id={"modal-title"}>{!!editar ? "Editar evento": "Agregar evento"}</Text>
            </Modal.Header>
            <Modal.Body>
                <Container display={'flex'} direction={"row"} justify={"space-between"} alignItems={"center"}>
                    <Text>Tipo del evento:</Text>
                    <Dropdown>
                        <Dropdown.Button
                            flat
                            color={'primary'}
                        >
                            {tipo}
                        </Dropdown.Button>
                        <Dropdown.Menu
                            color={'primary'}
                            disallowEmptySelection
                            selectionMode={'single'}
                            onSelectionChange={setTipo}
                        >
                            {Object.keys(tipos).map((option) => (
                                <Dropdown.Item
                                    key={option}
                                    textValue={option}
                                >
                                    {option}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
                <Input label={"Nombre del evento"} bordered color={"primary"} required={true} value={nombre}
                       onChange={(event)=>{setNombre(event.target.value)}}/>
                <Input label={"Descripción del evento"} bordered color={"primary"} required={true} value={descripcion}
                        onChange={(event)=>{setDescripcion(event.target.value)}}/>
                <Input label={"Hora del evento"} bordered color={"primary"} type={"time"} required={true} value={hora}
                        onChange={(event)=>{setHora(event.target.value)}}/>
                {!!tipo.has('Puntual') ? (
                        <Input label={"Fecha del evento"} bordered color={"primary"} type={"date"} required={!!tipo.has('Puntual')} value={fecha}
                        onChange={(event)=>{setFecha(event.target.value)}}/>) :
                    (<Dropdown>
                        <Dropdown.Button flat color={'primary'}>
                            {dia}
                        </Dropdown.Button>
                        <Dropdown.Menu
                            disallowEmptySelection={true}
                            selectionMode={'single'}
                            onSelectionChange={setDia}
                        >
                            {dias.map((option) => (
                                <Dropdown.Item
                                    key={option}
                                    textValue={option}
                                >
                                    {option}
                                </Dropdown.Item>))}
                        </Dropdown.Menu>

                    </Dropdown>)}
                <Input label={"Duración del evento en minutos"} bordered color={"primary"} type={"number"} required={true} value={duracion}
                        onChange={(event)=>{setDuracion(event.target.value)}}/>
                <Text color={"error"}>{error ? "Faltan campos por llenar" : ""}</Text>
                <Button onPress={agregar}>
                    Agregar
                </Button>
            </Modal.Body>
        </Modal>
    )
}



export {ModalAgregar}