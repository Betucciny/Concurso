import {Text, Spacer, Container, Image} from "@nextui-org/react"


export default function Home({}) {
    return (
        <>
            <Text h1 color={"primary"}>Bienvenido a ClassWave!!!</Text>
            <Text>
                "¡Bienvenido a ClassWave! La plataforma perfecta para mantenerse actualizado sobre todos los eventos
                y actividades emocionantes que ocurren en nuestra comunidad educativa. Ya sea que estés buscando
                eventos organizados por tus compañeros de clase, profesores o clubes estudiantiles, ClassWave
                es tu ventanilla única para descubrir y participar en una amplia gama de eventos. Únete a nuestra
                vibrante comunidad y mantente conectado con todo lo que sucede en tu entorno académico".
            </Text>
            <Spacer y={1}/>
            <Container display={"flex"} direction={"row"} justify={"space-between"} alignItems={"center"}>
                <Text h2>¿Qué es ClassWave?</Text>
                <Text>
                    "ClassWave es una plataforma que permite a los estudiantes, profesores y clubes estudiantiles
                    publicar y promocionar sus eventos. Los estudiantes pueden descubrir y participar en eventos
                    que les interesen, y los organizadores pueden administrar sus eventos y comunicarse con los
                    asistentes.
                </Text>
                <Text h2>Consejos para estudiantes</Text>
                <ul style={{listStyle: 'square'}} key={1}>
                    <li>Descubre eventos interesantes: Explora nuestra amplia selección de eventos que cubren una
                        variedad de categorías, desde conferencias y talleres educativos hasta competiciones
                        deportivas y presentaciones artísticas. Encuentra eventos que te apasionen y descubre
                        nuevas oportunidades para aprender, crecer y divertirte.
                    </li>
                    <li>
                        Participa y conéctate: Únete a los eventos que te interesen y aprovecha la oportunidad de
                        conectarte con otros estudiantes que comparten tus mismos intereses. ClassWave te brinda la
                        posibilidad de conocer a personas nuevas, formar amistades y crear una red de contactos
                        dentro de tu comunidad politécnica.
                    </li>
                    <li>
                        Organiza tus propios eventos: ¿Tienes una idea genial para un evento? ¡Hazlo realidad en
                        ClassWave! Organiza actividades, conferencias o clubes y promueve tus propias pasiones.
                        Invita a otros estudiantes a unirse a tus proyectos y crea una experiencia enriquecedora
                        para todos.
                    </li>
                    <li>
                        Suscripciones temáticas: Explora nuestras suscripciones temáticas, donde profesores y
                        alumnos pueden crear grupos centrados en temas específicos, como asignaturas o intereses
                        compartidos. Únete a una suscripción que se adapte a tus necesidades académicas o crea una
                        propia para colaborar con tus compañeros en un entorno dedicado.
                    </li>
                    <li>
                        Mantente informado: Con ClassWave, nunca te perderás un evento importante. Recibe
                        notificaciones y recordatorios sobre los eventos a los que te has inscrito, así como
                        actualizaciones sobre nuevas oportunidades. Mantente al tanto de las fechas límite, cambios
                        de horarios y cualquier otra información relevante para que puedas planificar tu
                        participación de manera efectiva.
                    </li>
                </ul>
            </Container>
            <Text h2>Bienvenido a una nueva era para la organización</Text>
            <Image
                src='https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/07/ipn_instituto_polite%CC%81cnico_nacional.jpg'
                width={500} height={300}/>
        </>
    )
}
