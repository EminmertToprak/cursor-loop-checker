let cursorHistory = [];

async function loopChecker(cursor) {
	try {
		const response = await fetch('/api/proxy', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ cursor: cursor }),
		});

		const data = await response.json();
		console.log(`Response for cursor ${cursor}:`, data);

		addLogEntry(cursor, data);

		if (!data.nextCursor || cursorHistory.includes(data.nextCursor)) {
			console.log('Loop detected or no more cursors. Stopping.');
			return;
		}

		cursorHistory.push(cursor);

		if (data.nextCursor) {
			console.log(`Next cursor: ${data.nextCursor}`);
			await loopChecker(data.nextCursor);
		}
	} catch (error) {
		console.error('Error:', error);
	}
}

function addLogEntry(cursor, data) {
	console.log(data);
	const isLastMessage = !data.nextCursor;
	const logEntry = document.createElement('div');

	logEntry.className = 'log-entry';

	const cursorSpan = document.createElement('span');
	cursorSpan.className = 'cursor';
	cursorSpan.textContent = `Cursor: ${cursor}`;

	const messageSpan = document.createElement('span');
	messageSpan.className = 'message';
	messageSpan.textContent = `Message: ${data.message}`;

	logEntry.appendChild(cursorSpan);
	logEntry.appendChild(messageSpan);

	if (isLastMessage) {
		logEntry.classList.add('highlight');
		addFlag(data.flag);
	}

	document.getElementById('output').prepend(logEntry);

	if (isLastMessage) {
		logEntry.classList.add('highlight');
	}
}

function addFlag(flag) {
	const flagDiv = document.getElementById('flag');
	flagDiv.textContent = `${flag}!`;
}

document.addEventListener('DOMContentLoaded', () => {
	loopChecker('');
});
