import { Router as ExpressRouter } from 'express';

import {
    createFilmController,
    findFilmController,
    deleteFilmController,
    updateFilmController,
    getFilmsListController,
} from './Controllers/index.js';

const Router = ExpressRouter();

Router.get('/films', getFilmsListController.run);

Router.post('/film', createFilmController.run);

Router.get('/film/:filmId', findFilmController.run);

Router.patch('/film/:filmId', updateFilmController.run);

Router.delete('/film/:filmId', deleteFilmController.run);

export default Router;
