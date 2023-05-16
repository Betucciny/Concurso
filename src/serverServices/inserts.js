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
        console.log(e);
        throw new Error("Error al registrar usuario");
    }
}

export {register};