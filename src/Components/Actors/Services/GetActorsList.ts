import { TypeOrm } from '../../../Libs/index.js';

import { Actor } from '../../../Models/index.js';

export const getActorsListService = async () => {
    const actorRepository = TypeOrm.getRepository(Actor);

    const actorsList = await actorRepository.find();

    return actorsList;
};
