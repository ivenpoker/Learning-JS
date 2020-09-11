// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Tests if an array of integers of length 2 contains 1 or a 3.                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 21, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let doChecking = function (arrayData) {
    if (!Array.isArray(arrayData))
        throw TypeError(`Invalid argument type. Expected array, got '${typeof (arrayData)}'`);
    if (arrayData.length !== 2)
        throw Error(`Invalid length of array. Expected length to be 2, got ${arrayData.length}`);
    return (arrayData[0] === 1 || arrayData[0] === 3) ||
        (arrayData[1] === 1 || arrayData[1] === 3)
};

let runTests = function () {

    let testA = [1, 4];
    let testB = [8, 0];
    let testC = [-1, 3];

    console.log(`Testing array [${testA}] --> ${doChecking(testA)}`);
    console.log(`Testing array [${testB}] --> ${doChecking(testB)}`);
    console.log(`Testing array [${testC}] --> ${doChecking(testC)}`);
};

// run the test algorithm

runTests();