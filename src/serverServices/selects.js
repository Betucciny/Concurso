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

async function getSuscripcionesPropias(idUsuario) {
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

async function getUsuarioData(idUsuario){
    const query = `Select u.id, r.tipo, u.nombre, u.correo, u.contrasena, u.numero from usuario as u join rol as r ` +
        `on u.rol_id = r.id where u.id = `+ escape(idUsuario) + `;`;
    const [usuario] = await pool.query(query);
    return usuario[0];
}

async function getSucripciones(idUsuario){
    const query = `select s.id, s.tipo, s.organizador, s.nombre, s.semestre, s.carrera, s.descripcion from suscripcion as s ` +
        `join usuario_sucripcion us on s.id = us.suscripcion where us.usuario = `+ escape(idUsuario) + `;`;
    const [suscripciones] = await pool.query(query);
    return suscripciones;
}



export {getEventosInd, getEventosSuscripcion, getSuscripcionesPropias, getUsuarioData, getSucripciones};