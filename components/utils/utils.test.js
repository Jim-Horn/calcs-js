import { mathFns } from './utils';

describe(`mathFns functionality`, () => {
    [
        {
            arg: [1, 2, 3],
            result: 2,
        },
        {
            arg: [2, 4, 6],
            result: 4,
        },
        {
            arg: [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1],
            result: 3.769230769230769,
        },
        {
            arg: [0],
            result: 0,
        },
        {
            arg: [],
            result: NaN,
        },
        {
            arg: ['a', 1],
            result: NaN,
        },
    ].forEach(runTest);

    function runTest({ arg, result }) {
        test(`average of ${JSON.stringify(arg)} should equal ${result}`, () => {
            expect(mathFns.avg(arg)).toEqual(result);
        });
    }
});
