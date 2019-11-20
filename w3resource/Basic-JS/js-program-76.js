// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates a new array taking the first and last elements from a given array of
// #                     integers and length must be > 1.
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 20, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let createNewArray = function (arrayA, arrayB) {
    if (!Array.isArray(arrayA))
        throw TypeError("Invalid first argument. Must be of type array");
    if (!Array.isArray(arrayB))
        throw TypeError("Invalid second argument. Must be of type array");

    return [arrayA[Math.floor(arrayA.length/2)], arrayB[Math.floor(arrayB.length/2)]];
};

let runTests = function () {

    let dataA = [1, 5, 8, 4, 2];
    let dataB = [8, -1, 4];

    console.log(`dataA [${dataA}] and dataB [${dataB}] --> [${createNewArray(dataA, dataB)}]`)
};

// Run tests ...

runTests();