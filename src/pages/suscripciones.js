import {Text, useTheme} from "@nextui-org/react";
import {Suscripcion, SuscripcionItems} from "@/components/suscripciones";
import {useState} from "react";


export default function Suscripciones() {
    const {theme} = useTheme();

    // const [suscripciones, setSuscripciones] = useState(null)
    const suscripciones = [
        {
            id: 1,
            eventos: [
                {
                    id: 1,
                    titulo: 'Clase de prueba',
                    descripcion: 'Clase de prueba',
                    hora: '10:00',
                    fecha: '2021-10-10',
                    duracion: '1:00',
                    recurrencia: false,
                },
            ]
        },
        {
            id: 2,
            eventos: [
                {
                    id: 2,
                    titulo: 'Clase de prueba 2',
                    descripcion: 'Clase de prueba 2',
                    hora: '10:00',
                    fecha: '2021-10-10',
                    duracion: '1:00',
                    recurrencia: false,
                },
                {
                    id: 3,
                    titulo: 'Clase de prueba 3',
                    descripcion: 'Clase de prueba 3',
                    hora: '10:00',
                    fecha: '2021-10-10',
                    duracion: '1:00',
                    recurrencia: false,
                },

            ]
        },
    ]

    return (
        <>
            <Text h1 color={'primary'}>Clases</Text>
            <Suscripcion>
                {suscripciones.map((suscripcion, index) => (
                    <SuscripcionItems key={index} eventos={suscripcion.eventos} idSuscripcion={suscripcion.id}/>
                ))}
            </Suscripcion>
        </>
    )
}