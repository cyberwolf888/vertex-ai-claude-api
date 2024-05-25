export const STATUS = {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info'
}

export const CODE_RESPONSE = {
    SUCCESS: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
}

export const MESSAGE_RESPONSE = {
    SUCCESS: 'Success',
    BAD_REQUEST: 'Bad Request',
    UNAUTHORIZED: 'Unauthorized',
    FORBIDDEN: 'Forbidden',
    NOT_FOUND: 'Not Found',
    INTERNAL_SERVER_ERROR: 'Internal Server Error'
}

export const createResponse = (data: any, status: number, message: string) => {
    return {
        statusCode: status,
        message: message,
        data: data
    }
}


export const MODEL_SONNET = {
    region: 'asia-southeast1',
    name: 'claude-3-sonnet@20240229',
}

export const MODEL_OPUS = {
    region: 'us-east5',
    name: 'claude-3-opus@20240229',

}

