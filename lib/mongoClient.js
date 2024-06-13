import { Utils } from './utils.js';
import { config } from 'dotenv';
config();

const mongoClient = Utils.createMongoClient(
	process.env.MONGODB_CONNECTION_STRING
);

const connect = async (client) => {
	await client.connect();
};

await connect(mongoClient);

export { mongoClient };