import {pool} from "./connection";
import {escape} from "mysql2";

async function getEventosInd(idUsuario){
    const currentDate = new Date();
    const oneWeekBefore = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 7);
    const oneWeekAfter = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7);
    const query =  `Select * from evento where id_usuario = `+ escape(idUsuario) + ` AND (fecha BETWEEN ` +
        escape(oneWeekBefore) +` AND ` + escape(oneWeekAfter) + ` OR fecha is Null);`;
    const [eventos] = await pool.query(query);
    return eventos;
}

async function getSuscripciones(idUsuario) {
    const query = `Select * from suscripcion where organizador = `+ escape(idUsuario) + `;`;
    const [suscripciones] = await pool.query(query);
    return suscripciones;
}

async function getEventosSuscripcion(idSuscripcion){
    const currentDate = new Date();
    const oneWeekBefore = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 7);
    const oneWeekAfter = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7);
    const query = `Select * from evento where id_suscripcion = `+ escape(idSuscripcion) + ` AND (fecha BETWEEN ` +
        escape(oneWeekBefore) +` AND ` + escape(oneWeekAfter) + ` OR fecha is Null);`;
    const [eventos] = await pool.query(query);
    return eventos;
}



export {getEventosInd, getEventosSuscripcion, getSuscripciones};