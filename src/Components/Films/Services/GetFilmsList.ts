import { TypeOrm } from '../../../Libs/index.js';

import { Film } from '../../../Models/index.js';

export const getFilmsListService = async () => {
    const filmRepository = TypeOrm.getRepository(Film);

    const filmsList = await filmRepository.find({ relations: ['actors'] });

    return filmsList;
};
