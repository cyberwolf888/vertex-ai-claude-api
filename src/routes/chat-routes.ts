import {createResponse, CODE_RESPONSE, MESSAGE_RESPONSE} from "../libs/helpers";
import {generalChat} from "../services/general-chat";

const routes = async (server: any, options: any) => {
    server.post('/', {
        preHandler: [server.validateJWT],
        handler: async (request: any, reply: any) => {
            //get the prompt from the request body and must be a string
            const prompt: string = request.body?.prompt?.value || '';
            const system_prompt: string = request.body?.system_prompt?.value || '';
            const temperature: number = parseFloat(request.body?.temperature?.value) || -1;
            const max_token: number = parseInt(request.body?.max_token?.value) || 100; //max token is 4096

            //if the prompt is empty, return a bad request response
            if (!prompt) {
                return createResponse([], CODE_RESPONSE.BAD_REQUEST, MESSAGE_RESPONSE.PROMPT_EMPTY)
            }

            const chatbotResponse = await generalChat(prompt, max_token, temperature, system_prompt);

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