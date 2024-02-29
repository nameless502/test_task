import { ErrorsStatusCodes, ErrorsData } from '../Types/index.js';

export class BaseError extends Error {
    public statusCode: ErrorsStatusCodes;

    protected data: ErrorsData;

    constructor(message: string, data = {}) {
        super(message);
        this.statusCode = ErrorsStatusCodes.default;
        this.data = data;
    }

    public toObject() {
        return {
            message: this.message,
            data: this.data,
        };
    }
}
