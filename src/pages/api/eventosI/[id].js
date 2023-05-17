import {getEventosInd} from "@/serverServices/selects";
import {eventoIndividual} from "@/serverServices/inserts";
import {deleteEventosInd} from "@/serverServices/deletes";
import {updateEventoIndividual} from "@/serverServices/updates";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const {id} = req.query;
        try {
            const eventos = await getEventosInd(id);
            res.status(200).json({eventos: eventos});
        } catch (e) {
            res.status(500).json({message: e.message});
        }
    }
    else if(req.method === "POST"){
        const {tipo, idEspecial, recurrencia, titulo, descripcion, hora, duracion, fecha} = req.body;
        try {
            await eventoIndividual(tipo, idEspecial, recurrencia, titulo, descripcion, hora, duracion, fecha);
            res.status(200).json({message: "Success"});
        } catch (e) {
            res.status(500).json({message: e.message});
        }
    }
    else if(req.method === "DELETE"){
        const {id} = req.query;
        try {
            await deleteEventosInd(id);
            res.status(200).json({message: "Success"});
        }catch (e) {
            res.status(500).json({message: e.message});
        }
    }
    else if(req.method === "PUT"){
        const {id, tipo, idEspecial, recurrencia, titulo, descripcion, hora, duracion, fecha} = req.body;
        console.log(req.body)
        try {
            await updateEventoIndividual(id, tipo, idEspecial, recurrencia, titulo, descripcion, hora, duracion, fecha);
            res.status(200).json({message: "Success"});
        }catch (e) {
            res.status(500).json({message: e.message});
        }
    }

    else {
        res.status(405).json({message: "Method not allowed"});
    }
}