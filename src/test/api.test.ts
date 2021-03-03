import { expect } from 'chai';
import { agent as request } from 'supertest';
import { Server } from '../server';

describe("Index Test", () => {
    it('should GET /api/jokes', async () => {
        const res = await request(new Server().getApp())
            .get('/api/jokes?type=general').send({
                "jokes": {
                    "id": 195,
                    "type": "general",
                    "setup": "What do you call a boomerang that won't come back?",
                    "punchline": "A stick.",
                    "createdAt": "2021-03-01T16:08:49.000Z",
                    "updatedAt": "2021-03-01T16:08:49.000Z"
                    }
            });
        expect(res.status).to.equal(200);
        expect(res.body).not.to.be.empty;
        expect(res.body.error).to.equal(undefined);
    });
});