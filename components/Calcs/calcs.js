export default function (arr) {
    if (!Array.isArray(arr)) {
        return `expected an Array, received ${typeof arr}: ${arr}`;
    }

    if (arr.length !== 13) {
        return `expected an Array with 13 elements, received ${arr.length}: ${JSON.stringify(arr)}`;
    }

    if (arr.some((i) => !Number.isInteger(i))) {
        return `expected all Array elements to be integers, received: ${JSON.stringify(arr)}`;
    }

    if (arr.some((i) => i < 1 || i > 7)) {
        return `expected all Array elements to be greater than 0 and less than 8, received: ${JSON.stringify(arr)}`;
    }

    return {};
}
