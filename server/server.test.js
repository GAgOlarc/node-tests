const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
        it('Should return Hello World! response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect(res => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    });
                })
                .end(done);
        });
    });
    
    describe('GET /users', () => {
        it('Should return a certain user', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect(res => {
                    expect(res.body).toInclude({name: 'Mike', age: 26});
                })
                .end(done);
        });
    });
});






