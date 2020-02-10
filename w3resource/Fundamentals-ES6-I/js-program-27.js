// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds every element that exists in any of the two given array once.             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 10, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const unionWith = (arrA = [], arrB = [], comp = f=>f) =>
    Array.from(new Set([...arrA, ...arrB.filter(x => arrA.findIndex(y => comp(x, y)) === -1)]));


const runTests =  () => {
    console.log(unionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)));
    console.log(unionWith([1, 2, 3, 4], [1, 2, 3, 4, 5], (a, b) => Math.round(a) === Math.round(b)));
};

runTests();