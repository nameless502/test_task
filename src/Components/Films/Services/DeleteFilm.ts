import { TypeOrm } from '../../../Libs/index.js';

import { Film } from '../../../Models/index.js';

export const deleteFilmService = async (id: number) => {
    const filmRepository = TypeOrm.getRepository(Film);

    const { affected } = await filmRepository.delete(id);

    return affected ? true : false;
};
