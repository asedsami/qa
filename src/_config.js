export default function _config(ENV) {
	let mongoURI = {
		development: 'mongodb://localhost/mydb',
		test: 'mongodb://localhost/testdb',
		mlab: 'mongodb://aseds4:pass4@ds061360.mlab.com:61360/mydb'
	};

	let config = {
		db: {
			DEBUG_FLAG: false,
			mongoURI: mongoURI['development']
			// mongoURI: mongoURI[ENV]
		},
		app: {
			MORGAN_DEV: true
		}
	};

	return config;
}