import User from "../models/User";
import Vaga from "../models/Vaga";

class VagaController{

    async index (req, res){

        //Retorna vaga a depender se esta ativa ou nao
        const {ativo} = req.query;
        const vagas = await Vaga.find({ ativo });


        return res.json(vagas)

    }
    async update(req, res){
        const {vaga_id} = req.params;
        const {nomeEmpresa, ativo, periodo, descricao, regime, local} = req.body;
        const {user_id} = req.headers;

        //Não permite que um usuário altere se não for ele o criador
        const user = await User.findById(user_id);
        const vagas = await Vaga.findById(vaga_id);

        if(String(user._id) !== String(vagas.user)){
            return res.status(401).json({error: 'Não autorizado'})
        }

        const vaga = await Vaga.updateOne({_id: vaga_id}, {
            user: user_id,
            nomeEmpresa,
            ativo,
            periodo,
            descricao,
            regime,
            local,
        });

        return res.send()
    }
    async store (req, res){
        const {nomeEmpresa, ativo, periodo, descricao, regime, local} = req.body;
        const {user_id} = req.headers;

        const vaga = await Vaga.create({
            user: user_id,
            nomeEmpresa,
            ativo,
            periodo,
            descricao,
            regime,
            local,
        });
        return res.json({vaga});
    }
    async destroy(req, res){
        const { vaga_id} = req.body;
        const {user_id} = req.headers;

        await Vaga.findByIdAndDelete({_id: vaga_id});
        return res.json({message: "Excluida com sucesso"})
    }
}
export default new VagaController();