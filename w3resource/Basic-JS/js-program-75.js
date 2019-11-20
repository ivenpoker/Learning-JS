// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Takes middle elements of two arrays of integers each of length 3, forms a       #
// #                     new array from middle data.                                                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 20, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let createNewArray = function (arrayA, arrayB) {

    if (!Array.isArray(arrayA))
        throw TypeError('Invalid argument type for first argument. Must be an array.');
    if (!Array.isArray(arrayB))
        throw TypeError('Invalid argument type for second argument. Must be an array.');

    if (arrayA.length !== 3)
        throw TypeError('Invalid array length for first Argument.');
    if (arrayB.length !== 3)
        throw TypeError('Invalid array length for second Argument.');

    let newData = [];
    newData.push(arrayA[Math.floor(arrayA.length / 2)]);
    newData.push(arrayB[Math.floor(arrayB.length / 2)]);

    return newData;
};

let runTests = function () {

    let dataA = [4, 2, 3];
    let dataB = [9, 1, 7];

    console.log(`From [${dataA}] and [${dataB}] --> [${createNewArray(dataA, dataB)}]`);
};

// Running tests now ....

runTests();