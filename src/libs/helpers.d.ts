// helpers.d.ts
declare module '../libs/helpers' {

    import {ModelInterface} from "../interfaces/ModelInterface";
    export const STATUS: {
        SUCCESS: string;
        ERROR: string;
        WARNING: string;
        INFO: string;
    }

    export const CODE_RESPONSE: {
        SUCCESS: number;
        BAD_REQUEST: number;
        UNAUTHORIZED: number;
        FORBIDDEN: number;
        NOT_FOUND: number;
        INTERNAL_SERVER_ERROR: number;
    }

    export const MESSAGE_RESPONSE: {
        SUCCESS: string;
        BAD_REQUEST: string;
        UNAUTHORIZED: string;
        FORBIDDEN: string;
        NOT_FOUND: string;
        INTERNAL_SERVER_ERROR: string;
    }

    export function createResponse(data: any, status: number, message: string): {
        statusCode: number;
        message: string;
        data: any;
    }

    export const MODEL_SONNET: ModelInterface;

    export const MODEL_OPUS: ModelInterface;
}