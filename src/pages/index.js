import {Text, Spacer, Container, Image} from "@nextui-org/react"


export default function Home() {
    return (
        <>
            <Text h1 color={"primary"}>Bienvenido a ClassWave!!!</Text>
            <Text b>
                "¡Bienvenido a ClassWave! La plataforma perfecta para mantenerse actualizado sobre todos los eventos
                y actividades emocionantes que ocurren en nuestra comunidad educativa. Ya sea que estés buscando
                eventos organizados por tus compañeros de clase, profesores o clubes estudiantiles, ClassWave
                es tu ventanilla única para descubrir y participar en una amplia gama de eventos. Únete a nuestra
                vibrante comunidad y mantente conectado con todo lo que sucede en tu entorno académico".
            </Text>
            <Spacer y={1}/>
            <Container display={"flex"} direction={"row"} justify={"space-between"} alignItems={"center"}>
                <Text h2>¿Qué es ClassWave?</Text>
                <Text b>
                    "ClassWave es una plataforma que permite a los estudiantes, profesores y clubes estudiantiles
                    publicar y promocionar sus eventos. Los estudiantes pueden descubrir y participar en eventos
                    que les interesen, y los organizadores pueden administrar sus eventos y comunicarse con los
                    asistentes.
                </Text>
            </Container>
        </>
    )
}
