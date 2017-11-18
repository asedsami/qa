import express from 'express';
import _config from './_config';
import { connectToDB, createExpressApp } from './helpers';

const config = _config(process.env);

connectToDB(config.db);

let app = createExpressApp(config.app);
console.log('env', app.get('env'));

app.get('/', (req, res, next)=> {
	res.render('index', { title: 'Welcome!!' });
});

export default app;