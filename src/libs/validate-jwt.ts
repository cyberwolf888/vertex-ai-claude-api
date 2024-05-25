import dotenv from "dotenv";
import {CODE_RESPONSE, createResponse, MESSAGE_RESPONSE} from "./helpers";

dotenv.config();

const validateJwt = async (request: any, reply: any) => {
    //get the authorization header from the request
    const authorization = request.headers?.authorization || '';
    //if the authorization header is empty, return an unauthorized response
    if (!authorization) {
        return reply.send(createResponse([], CODE_RESPONSE.UNAUTHORIZED, MESSAGE_RESPONSE.UNAUTHORIZED));
    }

    //split the authorization header by space
    const [bearer, token] = authorization.split(' ');
    //if the authorization header is not a bearer token, return an unauthorized response
    if (bearer !== 'Bearer' || !token) {
        return reply.send(createResponse([], CODE_RESPONSE.UNAUTHORIZED, MESSAGE_RESPONSE.UNAUTHORIZED));
    }

    //validate the token
    const secret = process.env.SCRET_KEY || '';
    return token === secret ? true : reply.send(createResponse([], CODE_RESPONSE.UNAUTHORIZED, MESSAGE_RESPONSE.UNAUTHORIZED));
}

export default validateJwt;