import mongoose from 'mongoose';

export default function connectToDB(config, cb) {
	mongoose.Promise = global.Promise;
	mongoose.connect(config.mongoURI);
	mongoose.set('debug', config.DEBUG_FLAG);

	let db = mongoose.connection;

	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', ()=> {
		console.log(`connected to mongo: ${config.mongoURI}`);
	});
}