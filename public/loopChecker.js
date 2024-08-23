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

		document.getElementById(
			'output'
		).innerText += `Cursor: ${cursor}, Response: ${JSON.stringify(data)}\n`;

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

document.addEventListener('DOMContentLoaded', () => {
	const initialCursor = '94885f20';
	console.log(`Starting loop with cursor: ${initialCursor}`);
	loopChecker(initialCursor);
});
