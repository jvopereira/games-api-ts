import fastifyMongo, { type FastifyMongodbOptions } from "@fastify/mongodb";
import type { FastifyError, FastifyInstance } from "fastify";
import fastifyPlugin from "fastify-plugin";
import logger from "../config/logger";

async function mongoConnector(
	fastify: FastifyInstance,
	options: FastifyMongodbOptions,
): Promise<void> {
	try {
		fastify.register(fastifyMongo, {
			url: process.env.MONGO_CONN_STRING,
			...options,
		});

		fastify.addHook("onError", (request, _reply, error: FastifyError, done) => {
			logger.error(
				`MongoDB Error on request ${request.method} ${request.url}: ${error.message}`,
			);
			done();
		});

		fastify.addHook("onClose", async (instance) => {
			logger.debug("Closing MongoDB connection...");
			await instance.mongo.client.close();
			logger.debug("MongoDB connection closed.");
		});

		logger.info("Connected to MongoDB.");
	} catch (err) {
		logger.error("Error connecting to MongoDB:", err);
		throw err;
	}
}

export const MongoProvider = fastifyPlugin(mongoConnector);
