const app = require('./app')
const supertest = require('supertest');
const {  describe, it } = require('jest-circus');
const app = supertest(app);

describe('/testNode endpoint', () => {
    it("should return a response", async () => {
       const response = await request.get("/testNode")
       expect(response.status).toBe(200)
       expect(response.text).toBe('Yes the testNode endpoint worked')
    });
});