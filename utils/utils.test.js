const expect = require('expect');

const utils = require('./utils');

it('Should add two numbers', () => {
    const result = utils.add(33, 11);

    expect(result).toBe(44).toBeA('number');
});

it('Should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('Should square a number', () => {
    const result = utils.square(5);

    expect(result).toBe(25).toBeA('number');
});

it('Should async square a number', (done) => {
    utils.asyncSquare(5, (square) => {
        expect(square).toBe(25).toBeA('number');
        done();
    });
});

it('Should set firstName and lastName', () => {
    const user = {age: 30, location: 'USA'};
    const result = utils.setName(user, 'Steve Smith');

    expect(result).toBeAn('object').toInclude({
        firstName: 'Steve',
        lastName: 'Smith'
    });
});

// it('Should expect some values', () => {
//     expect(12).toNotBe(12);
//     expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//     expect([1, 2, 3]).toInclude(2);
//     expect([1, 2, 3]).toExclude(5);
//     expect({
//         name: 'Andrew',
//         age: 30,
//         location: 'USA'
//     }).toInclude({
//         age: 30
//     });
// });