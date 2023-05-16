import {register} from "@/serverServices/inserts";


export default async function handler( req, res) {
    if (req.method === "POST") {
        const {username, password, mail, number} = req.body;
        try {
            await register(username, password, mail, number);
            res.status(200).json({message: "Success"});
        } catch (e) {
            res.status(500).json({message: e.message});
        }
    } else {
        res.status(405).json({message: "Method not allowed"});
    }
}
