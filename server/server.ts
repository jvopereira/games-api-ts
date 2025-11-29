import app from "./app";
import { MongoProvider } from "./database/mongodb";

const PORT = process.env.PORT || 3000;

async function startServer() {
	try {
		// Register plugins and routes
		await app.register(MongoProvider);

		// Start the server
		await app.listen({ port: Number(PORT) });
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
}

startServer();
