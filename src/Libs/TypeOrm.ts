import { DataSource } from 'typeorm';

import { Actor, Film, User } from '../Models/index.js';

import { getDirectoryPath } from '../Helpers/index.js';

const directoryPath = getDirectoryPath(import.meta.url);

export const TypeOrm = new DataSource({
    type: 'sqlite',
    database: directoryPath + '/../../database/database.db',
    synchronize: true,
    logging: false,
    entities: [Actor, Film, User],
    migrations: ['src/Migrations/*{.ts,.js}'],
    subscribers: [],
});

TypeOrm.initialize().then(() => console.log('DB connected'));
