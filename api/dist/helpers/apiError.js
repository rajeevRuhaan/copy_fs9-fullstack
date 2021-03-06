"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = exports.UnauthorizedError = exports.InternalServerError = exports.ForbiddenError = exports.NotFoundError = exports.DuplicateEntityError = void 0;
class ApiError extends Error {
    constructor(statusCode, message, source) {
        super();
        this.statusCode = statusCode;
        this.message = message;
        this.source = source;
    }
}
exports.default = ApiError;
class DuplicateEntityError extends ApiError {
    constructor(message = 'Duplicate Entity!', source) {
        super(409, message, source);
        this.message = message;
    }
}
exports.DuplicateEntityError = DuplicateEntityError;
class NotFoundError extends ApiError {
    constructor(message = 'Not Found', source) {
        super(404, message, source);
        this.message = message;
    }
}
exports.NotFoundError = NotFoundError;
class ForbiddenError extends ApiError {
    constructor(message = 'Forbidden', source) {
        super(403, message, source);
        this.message = message;
    }
}
exports.ForbiddenError = ForbiddenError;
class InternalServerError extends ApiError {
    constructor(message = 'Internal Server Error', source) {
        super(500, message, source);
        this.message = message;
    }
}
exports.InternalServerError = InternalServerError;
class UnauthorizedError extends ApiError {
    constructor(message = 'Unauthorized Request', source) {
        super(401, message, source);
        this.message = message;
    }
}
exports.UnauthorizedError = UnauthorizedError;
class BadRequestError extends ApiError {
    constructor(message = 'Bad Request', source) {
        super(400, message, source);
        this.message = message;
    }
}
exports.BadRequestError = BadRequestError;
//# sourceMappingURL=apiError.js.map