import Empresa from "../models/Empresa";



class EmpressaController{

    async index(req, res){
        return res.json({ok:true})
    }

    async store (req, res){
    const {cnpj, nome, local, segmento, funcionarios, telefone} = req.body;
    const {user_id} = req.headers;

        const empresa = await Empresa.create({
            user: user_id,
            cnpj,
            nome,
            local,
            segmento,
            funcionarios,
            telefone,
        });
        return res.json({empresa});
    }
}
export default new EmpressaController();