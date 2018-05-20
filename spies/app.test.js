const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
    const db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('Should call the spy correctly', () => {
        const spy = expect.createSpy();
        spy('Andrew', 25);
        expect(spy).toHaveBeenCalledWith('Andrew', 25);
    });

    it('Should call saveUser with user object', () => {
        const email = 'andrew@gmail.com';
        const password = '123asd';

        app.handleSignUp(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});