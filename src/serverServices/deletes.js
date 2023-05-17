import {pool} from "@/serverServices/connection";
import {escape} from "mysql2";

async function deleteEventosInd(idEvento){
    const query = `Delete from evento where id = `+ escape(idEvento) + `;`;
    try{
        const [result] = await pool.query(query);
        return result;
    }catch (e) {
        throw new Error("Error al eliminar evento");
    }
}

export {deleteEventosInd};