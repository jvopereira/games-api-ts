import pino, { type Logger } from "pino";

const transport = pino.transport({
	target: "pino-pretty",
	options: {
		colorize: true,
		translateTime: "SYS:HH:mm:ss",
		ignore: "pid,hostname",
	},
});

const logger: Logger = pino(
	{
		level:
			process.env.LOG_LEVEL ??
			(process.env.NODE_ENV === "production" ? "info" : "debug"),
		base: undefined,
	},
	transport,
);

export default logger;
