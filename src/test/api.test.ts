import { expect } from 'chai';
import { agent as request } from 'supertest';
import { Server } from '../server';

describe("Index Test", () => {
    it('should always pass', () => {
        expect(true).to.equal(true);
    });
    it('should GET /api/jokes', async () => {
        const res = await request(new Server().getApp())
            .get('/api/jokes').send();
        expect(res.status).to.equal(200);
        expect(res.body).not.to.be.empty;
        expect(res.body.data).not.to.be.empty;
        expect(res.body.data).to.be.an("object");
        expect(res.body.error).to.be.empty;
    });
});