import request from 'supertest';

import app from '../src/app';



describe('GET /api/v1/states', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/v1/states')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {states:['test']}, done);
  });
});
