import { BaseError } from '../Classes/index.js';

import { ErrorsStatusCodes, ErrorsData } from '../Types/index.js';

export class NotFoundError extends BaseError {
    constructor(message: string = 'Not found', data: ErrorsData = {}) {
        super(message, data);
        this.statusCode = ErrorsStatusCodes.notFound;
        this.data = data;
    }
}
