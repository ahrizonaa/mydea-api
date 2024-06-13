import { S3 } from '@aws-sdk/client-s3';

let endpoint = 'https://nyc3.digitaloceanspaces.com';
let credentials = {
	accessKeyId: process.env.SPACES_KEY,
	secretAccessKey: process.env.SPACES_SECRET
};

const s3Client = new S3({
	forcePathStyle: false, // Configures to use subdomain/virtual calling format.
	endpoint: endpoint,
	region: 'us-east-1',
	credentials: credentials
});

export { s3Client };