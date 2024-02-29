import { BaseController } from '../../../Classes/BaseController.js';

import { getActorsListService } from '../Services/index.js';

class GetActorsListController extends BaseController {
    protected controller = () => getActorsListService();
}

export const getActorsListController = new GetActorsListController();
