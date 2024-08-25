const express = require('express');
const request = require('request');
const app = express();
const path = require('path');
require('dotenv').config();

const cache = new Map();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/proxy', (req, res) => {
	let cursor = req.body.cursor;

	if (cache.has(cursor)) {
		let hit = cache.get(cursor);
		res.status(200).json({
			message: hit.message,
			nextCursor: hit.nextCursor,
			flag: hit.flag,
		});
		return;
	}

	const options = {
		url: process.env.API_URL,
		headers: {
			Authorization: process.env.API_TOKEN,
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify({ cursor: cursor }),
	};

	request(options, (error, response, body) => {
		if (error) {
			console.log(error);
			res.status(500).json({ message: 'Internal server error' });
			return;
		}

		const data = JSON.parse(body);

		cache.set(cursor, {
			message: data.message,
			nextCursor: data.nextCursor,
			flag: data.flag,
		});

		if (!data.nextCursor) {
			console.log(data);
		}
		res.status(200).json({
			message: data.message,
			nextCursor: data.nextCursor,
			flag: data.flag,
		});
	});
});

app.listen(3000, () => {
	console.log('Server started on port 3000');
});
