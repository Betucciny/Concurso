import {getEventosSuscripcion} from "@/serverServices/selects";
import {eventoIndividual} from "@/serverServices/inserts";


export default async function handler(req, res) {
    if(req.method === 'GET'){
        const {id} = req.query;
        try {
            const suscripcion = await getEventosSuscripcion(id);
            res.status(200).json({suscripcion: suscripcion});
        }catch (e) {
            res.status(500).json({message: e.message});
        }
    }else if(req.method === 'POST'){
        const {tipo, idEspecial, recurrencia, titulo, descripcion, hora, duracion, fecha} = req.body;
        try {
            await eventoIndividual(tipo, idEspecial, recurrencia, titulo, descripcion, hora, duracion, fecha);
            res.status(200).json({message: "Success"});
        } catch (e) {
            res.status(500).json({message: e.message});
        }
    }
    else{
        res.status(405).json({message: "Method not allowed"});
    }
}