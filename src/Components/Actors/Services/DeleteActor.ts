import { TypeOrm } from '../../../Libs/index.js';

import { Actor } from '../../../Models/index.js';

export const deleteActorService = async (id: number) => {
    const actorRepository = TypeOrm.getRepository(Actor);

    const { affected } = await actorRepository.delete(id);

    return affected ? true : false;
};
