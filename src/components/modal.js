import {Modal, Text} from "@nextui-org/react";
import React from "react";

function ModalAgregar({toOpen, funcClose}) {
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
                <Text id={"modal-description"}>Agregar nuevo evento individual</Text>
            </Modal.Body>
        </Modal>
    )
}

export {ModalAgregar}