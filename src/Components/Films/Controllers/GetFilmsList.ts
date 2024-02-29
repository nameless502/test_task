import { BaseController } from '../../../Classes/BaseController.js';

import { getFilmsListService } from '../Services/index.js';

class GetFilmsListController extends BaseController {
    protected controller = () => getFilmsListService();
}

export const getFilmsListController = new GetFilmsListController();
