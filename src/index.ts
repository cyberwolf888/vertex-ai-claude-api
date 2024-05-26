import dotenv from "dotenv";
import fastify from 'fastify';
import multipart from '@fastify/multipart';
import chatRoutes from "./routes/chat-routes";
import agentRoutes from "./routes/agent-routes";
import validateJwt from "./libs/validate-jwt";

dotenv.config();

const server = fastify({logger: false});

server.register(multipart, {attachFieldsToBody: true});
server.decorate('validateJWT', async function (request: any, reply: any) {
    await validateJwt(request, reply);
});


server.get('/', async (request, reply) => {
    return "API is running! 🚀 Bearer is" + process.env.SCRET_KEY;
});

server.register(chatRoutes, {prefix: '/chat'});
server.register(agentRoutes, {prefix: '/agent'});


const start = async () => {
    try {
        await server.listen({port: 3000, host: '0.0.0.0'});
        console.log(`Server is running at http://localhost:3000`);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();
