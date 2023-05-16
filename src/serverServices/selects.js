import {pool} from "connection";
import {escape} from "mysql2";

async function getEventosInd(idUsuario){
    const query = `Select * from tareas where id_usuario = `+ escape(idUsuario) + `;`;
    const [eventos] = await pool.query(query);
    return eventos;
}


// async function getSuscripciones(idUsuario) {
//     const query = `Select * from suscripcion where id_usuario = `+ escape(idUsuario) + `;`;
// }

async function getEventosSuscripcion(idSuscripcion){
    const query = `Select * from eventos_grupales where id_usuario = `+ escape(idUsuario) + `;`;
    const [eventos] = await pool.query(query);
    return eventos;
}



