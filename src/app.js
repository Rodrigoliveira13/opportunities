import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App{
    constructor(){
        this.server = express();

        // Minha conexão com o database mongo
        mongoose.connect('mongodb+srv://admin:admin@cluster0.hksuo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTOpology:true, })

        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.server.use(express.json());
    }
    routes(){
        this.server.use(routes);
    }
}

export default new App().server;