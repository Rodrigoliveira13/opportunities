
import {Schema, model} from 'mongoose'

const EmpresaSchema = new Schema({
    cnpj: String,
    nome: String,
    local: String,
    segmento: String,
    funcionarios: Number,
    telefone: Number,
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

export default model ('Empresa', EmpresaSchema);