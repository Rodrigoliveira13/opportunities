
import {Schema, model} from 'mongoose'

const VagaSchema = new Schema({
    nomeEmpresa: String,
    vaga: String,
    ativo: Boolean,
    periodo: String,
    descricao: String,
    regime: String,
    local: String,
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

export default model ('Vaga', VagaSchema);