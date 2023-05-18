import {Button, Card, Container, Spacer, Text} from "@nextui-org/react";


function Suscripcion({children}) {
    return (
        <>
            <Container display={"flex"} direction={"row"} alignItems={"center"} justify={"center"}>
                {children}
            </Container>
            <Spacer y={1}/>
            <Button>Agregar suscripcion</Button>
        </>
    )
}

function SuscripcionItems({eventos, idSuscripcion}) {
    return (
        <Container style={{marginTop: "1rem"}}>
            <Text h3>Clase</Text>
            <Container display={"flex"} wrap={'wrap'} style={{maxHeight: '20rem', overflowY: 'scroll', margin: '1rem'}}>
                {eventos.map((evento, index) => (
                        <Card key={index} css={{mw: "200px", margin: "1rem", padding:'1rem'}}>
                            <Text>{evento.titulo}</Text>
                            <Text>{evento.descripcion}</Text>
                            <Text>{evento.hora}</Text>
                            {!!evento.recurrencia ? <Text>{evento.dia}</Text> : <Text>{evento.fecha}</Text>}
                            <Text>{evento.duracion}</Text>
                        </Card>
                    )
                )}
            </Container>
            <Button>Agregar Evento</Button>
        </Container>

    )
}

export {Suscripcion, SuscripcionItems}