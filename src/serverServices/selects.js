import {pool} from "@/server_services/connection";

async function getTareas() {
    const [tareas] = await pool.query('SELECT * FROM tareas');
    return tareas;
}