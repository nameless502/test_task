import { Router as ExpressRouter } from 'express';

import {
    createActorController,
    findActorController,
    updateActorController,
    deleteActorController,
    getActorsListController,
} from './Controllers/index.js';

const Router = ExpressRouter();

Router.get('/actors', getActorsListController.run);

Router.post('/actor', createActorController.run);

Router.get('/actor/:actorId', findActorController.run);

Router.patch('/actor/:actorId', updateActorController.run);

Router.delete('/actor/:actorId', deleteActorController.run);

export default Router;
