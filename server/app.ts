import "dotenv/config";
import Fastify, { type FastifyInstance } from "fastify";

const app: FastifyInstance = Fastify({
	logger: {
		transport: {
			target: "pino-pretty",
			options: {
				colorize: true,
				translateTime: "SYS:HH:mm:ss",
				ignore: "pid,hostname",
			},
		},
	},
});

export default app;
