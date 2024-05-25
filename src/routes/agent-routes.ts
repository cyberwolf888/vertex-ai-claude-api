import {CODE_RESPONSE, createResponse, MESSAGE_RESPONSE} from "../libs/helpers";
import {agentMeetingScribe} from "../services/agent-meeting-scribe";

const routes = async (server: any, options: any) => {
    server.post('/agent-meeting-scribe', {
        preHandler: [server.validateJWT],
        handler: async (request: any, reply: any) => {
            //get the prompt from the request body and must be a string
            const prompt: string = request.body?.prompt?.value || '';
            //if the prompt is empty, return a bad request response
            if (!prompt) {
                return createResponse([], CODE_RESPONSE.BAD_REQUEST, MESSAGE_RESPONSE.BAD_REQUEST)
            }

            const chatbotResponse = await agentMeetingScribe(prompt);

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