import { MongoClient, ServerApiVersion } from 'mongodb';

class Utils {
	static getClient(connection_string) {
		// mongodb connection string
		const uri = connection_string;
		const client = new MongoClient(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			serverApi: ServerApiVersion.v1,
		});
		return client;
	}
}

export { Utils };
