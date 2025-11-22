import app from "./app";

const PORT = process.env.PORT || 3000;

async function startServer() {
	try {
		await app.listen({ port: Number(PORT) });
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
}

startServer();
