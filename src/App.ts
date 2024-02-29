import 'reflect-metadata';

import Express from 'express';

import Router from './Router.js';

import { ErrorsMiddleware } from './Middlewares/index.js';

const App = Express();

App.use(Express.json());

App.use(Router);

App.use(ErrorsMiddleware);

export default App;
