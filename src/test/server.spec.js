const request = require('supertest');
const app = require('../server');

describe('Sample test app server', () => {
    it('should get main route!', async () => {
        const res = await request(app).get('/');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message');
    });
});
