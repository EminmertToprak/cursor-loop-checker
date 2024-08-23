const express = require('express');
const request = require('request');
const app = express();
const path = require('path');
require('dotenv').config();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/proxy', (req, res) => {
	const options = {
		url: process.env.API_URL,
		headers: {
			Authorization: process.env.API_TOKEN,
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify(req.body),
	};

	request(options).pipe(res);
});

app.listen(3000, () => {
	console.log('Server started on port 3000');
});
