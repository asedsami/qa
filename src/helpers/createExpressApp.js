import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

export default function createExpressApp(config) {
	let app = express();

	app.use(bodyParser.urlencoded({extended: false}));
	app.use(bodyParser.json());
	app.use(express.static('public'));
	app.set('view engine', 'pug');
	app.set('views', __dirname + '/../../views');

	if(config.MORGAN_DEV) 
		app.use(morgan('dev')); 

	return app;
}