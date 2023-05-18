import {Button, Card, Container, Spacer, Text} from "@nextui-org/react";
import {getYMD, getMinutesFromDuration} from "@/clientServices/formatEvents";


function Suscripcion({children}) {
    return (
        <>
            <Container display={"flex"} direction={"row"} alignItems={"center"} justify={"center"}>
                {children}
            </Container>
        </>
    )
}

function SuscripcionItems({eventos, idSuscripcion, title, clickonEvent, clikOnAgregar}) {
    return (
        <Container style={{marginTop: "1rem"}} data-id={idSuscripcion}>
            <Text h3>{title}</Text>
            <Container display={"flex"} wrap={'wrap'} style={{maxHeight: '20rem', overflowY: 'scroll', margin: '1rem'}}>
                {eventos.map((evento, index) => (
                        <Card key={index} css={{mw: "340px", margin: "1rem", padding: '1rem'}}>
                            <Card.Header>
                                <Text>{'Título: ' + evento.titulo}</Text>
                            </Card.Header>
                            <Card.Divider/>
                            <Text>{!!evento.recurrencia ? 'Recurrente' : 'Puntual'}</Text>
                            <Card.Body>
                                <Text>{'Descripcion: ' + evento.decripcion}</Text>
                                <Text>{'Hora: ' + evento.hora}</Text>
                                {!!evento.recurrencia ? <Text>{'Dia: ' + evento.dia_semana}</Text> :
                                    <Text>{'Fecha: ' + getYMD(new Date(evento.fecha))}</Text>}
                                <Text>{'Duracion: ' + getMinutesFromDuration(evento.duracion) + ' minutos'}</Text>
                                <Button size="sm" style={{maxWidth: '2rem'}} color={'secondary'}
                                        onPress={() => clickonEvent(evento.id)}>Editar</Button>
                            </Card.Body>
                        </Card>
                    )
                )}
            </Container>
            <Container display={"flex"} direction={"row"} alignItems={"center"} justify={"space-around"}>
                <Button onPress={clikOnAgregar} >Agregar Evento</Button>
                <Button color={'warning'}>Eliminar Suscripcion</Button>
            </Container>
        </Container>

    )
}

export {Suscripcion, SuscripcionItems}