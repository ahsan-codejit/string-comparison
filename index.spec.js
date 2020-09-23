
const compareStrings = require('./index').compareStrings;

describe('Test compareString function', () => {

    it('It should return -1 for args: ("equal", "car") ', () => {
        expect(compareStrings("equal", "car")).toEqual(-1);
    });

    it('It should return -1 for args: ("equal", "quala") ', () => {
        expect(compareStrings("equal", "quala")).toEqual(-1);
    });

    it('It should return 2 for args: ("coffee", "eecoff") ', () => {
        expect(compareStrings("coffee", "eecoff")).toEqual(2);
    });

    it('It should return 4 for args: ("karma", "armak") ', () => {
        expect(compareStrings("karma", "armak")).toEqual(4);
    });

    it('It should return 3 for args: ("look", "ookl") ', () => {
        expect(compareStrings("look", "ookl")).toEqual(3);
    });
});

