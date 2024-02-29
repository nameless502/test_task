import { BaseError } from '../Classes/index.js';

import { ErrorsStatusCodes, ErrorsData } from '../Types/index.js';

export class AuthorizationError extends BaseError {
    constructor(message: string = 'Not authorized', data: ErrorsData = {}) {
        super(message, data);
        this.statusCode = ErrorsStatusCodes.notAuthorized;
        this.data = data;
    }
}
