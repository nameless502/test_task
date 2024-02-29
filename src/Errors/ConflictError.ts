import { BaseError } from '../Classes/index.js';

import { ErrorsStatusCodes, ErrorsData } from '../Types/index.js';

export class ConflictError extends BaseError {
    constructor(message: string = 'Conflict error', data: ErrorsData = {}) {
        super(message, data);
        this.statusCode = ErrorsStatusCodes.conflict;
        this.data = data;
    }
}
