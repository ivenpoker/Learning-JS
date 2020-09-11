// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates a new array out of the two supplied by creating each possible pair from #
// #                     the arrays.                                                                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 10, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const createPairs = (arrA, arrB) => arrA.reduce((accA, dataA) => {
    let temp = arrB.reduce((accB, dataB) => [...accB, [dataA, dataB]], []);
    return [...accA, ...temp];
}, []);

const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);

const runTests = () => {
    console.log(createPairs([1, 2, 3], [1, 2, 3]));
    console.log(xProd([1, 2, 3], [1, 2, 3]));
};

runTests();