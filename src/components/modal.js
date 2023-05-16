import {Dropdown, Modal, Text, Container, Button} from "@nextui-org/react";
import React from "react";

function ModalAgregar({toOpen, funcClose}) {
    const tipos = {
        'puntual': 0,
        'recurrente': 1,
    }
    const [tipo, setTipo] = React.useState(new Set([Object.keys(tipos)[0]]));


    return (
        <Modal
            closeButton
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            open={toOpen}
            onClose={funcClose}
        >
            <Modal.Header>
                <Text h1 id={"modal-title"}>Agregar nuevo evento individual</Text>
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
                <Button onPress={()=> console.log([...tipo.keys()])}>Agregar</Button>
            </Modal.Body>
        </Modal>
    )
}

export {ModalAgregar}