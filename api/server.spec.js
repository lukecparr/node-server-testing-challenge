const server = require('./server.js');

describe('server.js tests', () => {
	test('environment is "testing"', () => {
		expect(process.env.DB_ENV).toBe('testing');
	});
});
