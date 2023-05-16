import {Dropdown, Modal, Text, Container, Button, Input} from "@nextui-org/react";
import React from "react";
import dayjs from "dayjs";


function ModalAgregar({toOpen, funcClose}) {
    const tipos = {
        'Puntual': 0,
        'Recurrente': 1,
    }
    const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
    const [tipo, setTipo] = React.useState(new Set([Object.keys(tipos)[0]]));
    const [dia, setDia] = React.useState(new Set([dias[0]]));
    const [nombre, setNombre] = React.useState('');
    const [descripcion, setDescripcion] = React.useState('');
    const [hora, setHora] = React.useState('');
    const [fecha, setFecha] = React.useState(dayjs().format('YYYY-MM-DD'));
    const [duracion, setDuracion] = React.useState(0);


    return (
        <Modal
            closeButton
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            open={toOpen}
            onClose={funcClose}
        >
            <Modal.Header>
                <Text h3 id={"modal-title"}>Agregar nuevo evento individual</Text>
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
                <Input label={"Nombre del evento"} bordered color={"primary"}
                       onChange={(event)=>{setNombre(event.target.value)}}/>
                <Input label={"Descripción del evento"} bordered color={"primary"}
                        onChange={(event)=>{setDescripcion(event.target.value)}}/>
                <Input label={"Hora del evento"} bordered color={"primary"} type={"time"}
                        onChange={(event)=>{setHora(event.target.value)}}/>
                {!!tipo.has('puntual') ? (
                        <Input label={"Fecha del evento"} bordered color={"primary"} type={"date"}
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
                <Input label={"Duración del evento en minutos"} bordered color={"primary"} type={"number"}
                        onChange={(event)=>{setDuracion(event.target.value)}}/>
                <Button onPress={() => console.log([...tipo.keys()][0], [...dia][0], nombre, descripcion, hora, fecha, duracion)}>
                    Agregar
                </Button>
            </Modal.Body>
        </Modal>
    )
}

export {ModalAgregar}