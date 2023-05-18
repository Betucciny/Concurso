import {getEventosSuscripcion, getSuscripciones} from "@/serverServices/selects";


export default async function handler(req, res) {
    if(req.method ===  'GET'){
        const {id} = req.query;
        try {
            const suscripcion = await getSuscripciones(id);
            for (let i = 0; i < suscripcion.length; i++) {
                suscripcion[i].eventos = await getEventosSuscripcion(suscripcion[i].id);
            }
            res.status(200).json({suscripcion: suscripcion});
        }catch (e) {
            res.status(500).json({message: e.message});
        }
    }
    else if(req.method === 'POST'){


    }
    else{
        res.status(405).json({message: "Method not allowed"});
    }
}
