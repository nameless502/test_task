import { TypeOrm } from '../../../Libs/index.js';

import { Actor } from '../../../Models/index.js';

export const updateActorService = async (id: number, payload: Actor) => {
    const actorRepository = TypeOrm.getRepository(Actor);

    const result = await actorRepository.update(id, payload);

    if (result.affected === 0) {
        return null;
    }

    const actorData = await actorRepository.findOne({ where: { id } });

    return actorData;
};
