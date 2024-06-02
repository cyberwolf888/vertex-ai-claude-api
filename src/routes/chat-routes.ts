import {createResponse, CODE_RESPONSE, MESSAGE_RESPONSE} from "../libs/helpers";
import {generalChat} from "../services/general-chat";

const routes = async (server: any, options: any) => {
    server.post('/', {
        preHandler: [server.validateJWT],
        handler: async (request: any, reply: any) => {
            //get the prompt from the request body and must be a string
            const prompt: string = request.body?.prompt?.value || '';
            //if the prompt is empty, return a bad request response
            if (!prompt) {
                return createResponse([], CODE_RESPONSE.BAD_REQUEST, MESSAGE_RESPONSE.PROMPT_EMPTY)
            }

            const chatbotResponse = await generalChat(prompt, 4096);

            if (!chatbotResponse) {
                return createResponse([], CODE_RESPONSE.INTERNAL_SERVER_ERROR, MESSAGE_RESPONSE.INTERNAL_SERVER_ERROR)
            }

            reply.send(createResponse([
                {
                    prompt: prompt,
                    response: chatbotResponse
                }
            ], CODE_RESPONSE.SUCCESS, MESSAGE_RESPONSE.SUCCESS));
        }
    });
}

export default routes;