import {pool} from "./connection";
import {hashPassword} from "./encryptation";
import {escape} from "mysql2";

async function register(username, password, mail, number) {
    const hash = await hashPassword(password);
    const query = "Insert into usuario (nombre, correo, contrasena, numero) values (" +
        escape(username) + ", " +
        escape(mail) + ", " +
        escape(hash) + ", " +
        escape(number) + ");";
    try {
        const [result] = await pool.query(query);
        return result;
    }
    catch (e) {
        throw new Error("Error al registrar usuario");
    }
}


async function eventoIndividual(tipo, idEspecial, recurrencia, titulo, descripcion, hora, duracion, fecha) {
    const id = tipo === 'suscripcion' ? 'id_suscripcion' : 'id_usuario';
    const fechaE = recurrencia ? "dia_semana" : "fecha";
    const query = "Insert into evento (tipo_evento, " + id + ", recurrencia, titulo, decripcion, hora, duracion, " + fechaE + ") values (" +
        escape(tipo) + ", " +
        escape(idEspecial) + ", " +
        escape(recurrencia) + ", " +
        escape(titulo) + ", " +
        escape(descripcion) + ", " +
        escape(hora) + ", " +
        escape(duracion) + ", " +
        escape(fecha) + ");";
    try {
        const [result] = await pool.query(query);
        return result;
    }
    catch (e) {
        throw new Error("Error al registrar evento");
    }
}


export {register, eventoIndividual};