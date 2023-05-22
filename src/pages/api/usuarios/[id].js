import {getUsuarioData} from "@/serverServices/selects";

export default async function handler(req, res) {
    if(req.method ===  'GET'){
        const {id} = req.query;
        try {
            const usuario = await getUsuarioData(id);
            res.status(200).json({usuario: usuario});
        }catch (e) {
            res.status(500).json({message: e.message});
        }
    }
    else {
        res.status(405).json({message: "Method not allowed"});
    }
}