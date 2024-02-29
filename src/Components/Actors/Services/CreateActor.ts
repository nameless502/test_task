import { TypeOrm } from '../../../Libs/index.js';

import { Actor } from '../../../Models/index.js';

export const createActorService = async (payload: Actor) => {
    const actorData = TypeOrm.manager.create(Actor, payload);

    const newActor = await TypeOrm.manager.save(actorData);

    return newActor;
};
