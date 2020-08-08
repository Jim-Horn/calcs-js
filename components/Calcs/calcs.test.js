import calcs from './calcs';

describe('calcs - basic argument tests', () => {
    test('expects an array as an argument', () => {
        expect(calcs('foo')).toBe('expected an Array, received string: foo');
        expect(calcs(5)).toBe(`expected an Array, received number: 5`);
        expect(calcs({})).toBe(`expected an Array, received object: [object Object]`);
    });

    test('expects the array to contain 13 elements', () => {
        expect(calcs([1])).toBe('expected an Array with 13 elements, received 1: [1]');
        expect(calcs([1, 5, 'a'])).toBe(`expected an Array with 13 elements, received 3: [1,5,\"a\"]`);
    });

    test('expects all array elements to be integers', () => {
        expect(calcs([1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1])).toEqual({
            input: [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1],
            mean: 3.769230769230769,
            stdDev: 1.8873606379054304,
        });

        expect(calcs([1, 2, 3, 4.6, 5, 6, 7, 8, 9, 10, 11, 12, 13])).toEqual(
            'expected all Array elements to be integers, received: [1,2,3,4.6,5,6,7,8,9,10,11,12,13]'
        );

        expect(calcs([1, 2, 3, 4, 5, 6, 'a', 8, 9, 10, 11, 12, 13])).toEqual(
            `expected all Array elements to be integers, received: [1,2,3,4,5,6,"a",8,9,10,11,12,13]`
        );
    });

    test('expects all array elements to be in the range of 1-7', () => {
        expect(calcs([1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1])).toEqual({
            input: [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1],
            mean: 3.769230769230769,
            stdDev: 1.8873606379054304,
        });
        expect(calcs([0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2])).toEqual(
            `expected all Array elements to be greater than 0 and less than 8, received: [0,1,2,3,4,5,6,7,6,5,4,3,2]`
        );
        expect(calcs([1, 2, 3, 4, 5, 6, 7, 8, 6, 5, 4, 3, 2])).toEqual(
            `expected all Array elements to be greater than 0 and less than 8, received: [1,2,3,4,5,6,7,8,6,5,4,3,2]`
        );
    });
});
