import {escape} from "mysql2";
import {pool} from "@/serverServices/connection";

function quitarAcentos(palabra) {
    const mapaAcentos = {
        á: 'a',
        é: 'e',
        í: 'i',
        ó: 'o',
        ú: 'u',
        ü: 'u',
        ñ: 'n',
        Á: 'A',
        É: 'E',
        Í: 'I',
        Ó: 'O',
        Ú: 'U',
        Ü: 'U',
        Ñ: 'N'
    };
    return palabra.replace(/[áéíóúüñÁÉÍÓÚÜÑ]/g, (letra) => mapaAcentos[letra]);
}

async function updateEventoIndividual(id_evento, tipo, idEspecial, recurrencia, titulo, descripcion, hora, duracion, fecha) {
    const id = tipo === 'suscripcion' ? 'id_suscripcion' : 'id_usuario';
    const fechaE = recurrencia ? quitarAcentos("dia_semana") : "fecha";
    const query = "Update evento set " +
        "tipo_evento = " + escape(tipo) + ", " +
        id + " = " + escape(idEspecial) + ", " +
        "recurrencia = " + escape(recurrencia) + ", " +
        "titulo = " + escape(titulo) + ", " +
        "decripcion = " + escape(descripcion) + ", " +
        "hora = " + escape(hora) + ", " +
        "duracion = " + escape(duracion) + ", " +
        fechaE + " = " +escape(fecha) + " where id = " + escape(id_evento) + ";";
    try {
        const [result] = await pool.query(query);
        return result;
    }
    catch (e) {
        throw new Error("Error al registrar evento");
    }
}

export {updateEventoIndividual};