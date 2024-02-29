import { TypeOrm } from '../../../Libs/index.js';

import { Actor } from '../../../Models/index.js';

export const findActorService = async (id: number) => {
    const actorRepository = TypeOrm.getRepository(Actor);

    const actorData = await actorRepository.findOne({ where: { id } });

    return actorData;
};
