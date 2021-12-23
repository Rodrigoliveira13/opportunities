import User from "../models/User";


class SessionController{
    async store(req, res){
        const {email} = req.body;

        //verifica se há um usuário com esse email
        let user = await User.findOne({ email });

        //caso não exista ele cria um novo usuário se existir só retorna
        if(!user){
            user = await User.create({ email })  
        }

        return res.json(user);
    }

}
export default new SessionController();