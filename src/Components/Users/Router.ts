import { Router as ExpressRouter } from 'express';

import {
    registrationController,
    authorizationController,
} from './Controllers/index.js';

const Router = ExpressRouter();

Router.post('/register', registrationController.run);

Router.post('/auth', authorizationController.run);

export default Router;
