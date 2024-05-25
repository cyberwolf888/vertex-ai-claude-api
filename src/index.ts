import fastify from 'fastify';
import chatRoutes from "./routes/chat-routes";

const server = fastify({ logger: true });

server.get('/', async (request, reply) => {
    return "API is running!";
});

server.register(chatRoutes, { prefix: '/chat' });


const start = async () => {
    try {
        await server.listen({ port: 3000, host: '0.0.0.0' });
        console.log(`Server is running at http://localhost:3000`);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();
