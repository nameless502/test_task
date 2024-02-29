import { BaseError } from '../Classes/index.js';

import { ErrorsStatusCodes, ErrorsData } from '../Types/index.js';

export class ValidationError extends BaseError {
    constructor(message: string = 'Validation error', data: ErrorsData = {}) {
        super(message);
        this.statusCode = ErrorsStatusCodes.badRequest;
        this.data = data;
    }
}
