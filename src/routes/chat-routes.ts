import {createResponse, CODE_RESPONSE, MESSAGE_RESPONSE} from "../libs/helper";
import {claude} from "../libs/anthropic";

const routes = async (server: any, options: any) => {
    server.get('/', async (request: any, reply: any) => {
        await claude();
        return createResponse(null, CODE_RESPONSE.SUCCESS, MESSAGE_RESPONSE.SUCCESS)
    });
}

export default routes;