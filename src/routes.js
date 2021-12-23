import { Router } from 'express';
import SessionController from './controllers/SessionController';
import EmpresaController from './controllers/EmpresaController';
import VagaController from './controllers/VagaController';



const routes = new Router();


routes.post('/sessions', SessionController.store);

routes.post('/empresa', EmpresaController.store);

routes.post('/vaga', VagaController.store);

routes.get('/vagas', VagaController.index);

routes.put('/vaga/:vaga_id', VagaController.update);

routes.delete('/vaga', VagaController.update);

export default routes;