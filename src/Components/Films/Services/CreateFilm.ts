import { In } from 'typeorm';

import { TypeOrm } from '../../../Libs/index.js';

import { Film, Actor } from '../../../Models/index.js';

export const createFilmService = async (name: string, actors: number[]) => {
    const actorsList = await TypeOrm.getRepository(Actor).find({
        where: { id: In(actors) },
    });

    const payload = { name, actors: actorsList as unknown as (typeof Actor)[] };

    const filmData = TypeOrm.manager.create(Film, payload);

    const newFilm = await TypeOrm.manager.save(filmData);

    return newFilm;
};
