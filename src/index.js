import { install } from 'source-map-support';
install();
import 'babel-polyfill';
//*********************************//


import app from './app';
import http from 'http';
import reload from 'reload';

let server = http.createServer(app);

reload(server, app);

throw new Error('Test!'); // line 11

server.listen(8000, ()=> {
	console.log('magic happens at localhost:2000');
});
