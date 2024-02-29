import { FindOptionsWhere } from 'typeorm';

import { TypeOrm } from '../../../Libs/index.js';

import { Film } from '../../../Models/index.js';

export const findFilmService = async (params: FindOptionsWhere<Film>) => {
    const filmRepository = TypeOrm.getRepository(Film);

    const filmData = await filmRepository.findOne({
        where: params,
        relations: ['actors'],
    });

    return filmData;
};
