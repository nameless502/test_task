import { In } from 'typeorm';

import { TypeOrm } from '../../../Libs/index.js';

import { Actor, Film } from '../../../Models/index.js';

const updateFilmData = async (film: Film, name?: string, actors?: number[]) => {
    if (actors) {
        const actorsList = await TypeOrm.getRepository(Actor).find({
            where: { id: In(actors) },
        });

        film.actors = actorsList as unknown as (typeof Actor)[];
    }

    if (name) {
        film.name = name;
    }

    await TypeOrm.manager.save(film);
};

export const updateFilmService = async (
    id: number,
    name?: string,
    actors?: number[]
) => {
    const filmRepository = TypeOrm.getRepository(Film);

    const filmData = await filmRepository.findOne({
        where: { id },
        relations: ['actors'],
    });

    if (!filmData) {
        return null;
    }

    await updateFilmData(filmData, name, actors);

    const updatedFilmData = await filmRepository.findOne({
        where: { id },
        relations: ['actors'],
    });

    return updatedFilmData;
};
