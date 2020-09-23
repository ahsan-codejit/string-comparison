
const compareStrings = require('./index');

describe('Test compareString function', () => {
    it('It should return -1 for no params', () => {
        expect(compareStrings()).toEqual(-1);
    });

    it('It should return -1 for args: (1) ', () => {
        expect(compareStrings(1)).toEqual(-1);
    });

    it('It should return -1 for args: (1) ', () => {
        expect(compareStrings(1, 1)).toEqual(-1);
    });

    it('It should return -1 for args: ("test") ', () => {
        expect(compareStrings("test")).toEqual(-1);
    });

    it('It should return -1 for args: ({}, {}) ', () => {
        expect(compareStrings({}, {})).toEqual(-1);
    });

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
    it('It should return 1 for args: ("everestate", "eeverestat") ', () => {
        expect(compareStrings("everestate", "eeverestat")).toEqual(1);
    });

    it('It should return 9 for args: ("everestate", "verestatee") ', () => {
        expect(compareStrings("everestate", "verestatee")).toEqual(9);
    });

    it('It should return 0 for args: ("everestate", "everestate") ', () => {
        expect(compareStrings("everestate", "everestate")).toEqual(0);
    });
});

