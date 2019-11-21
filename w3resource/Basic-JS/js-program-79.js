// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Tests if an array of integers contains 30 or 40 twice. The array length should  #
// #                     be 0, 1, or 2.                                                                  #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 21, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let doChecking = function (arrayData) {
    if (!Array.isArray(arrayData))
        throw TypeError(`Invalid argument type. Expected array, got '${typeof (arrayData)}'`);
    if (arrayData.length > 2)
        throw Error(`Invalid length of array. Expected length to atleast 2, got ${arrayData.length}`);
    let tempA = arrayData[0];
    let tempB = arrayData[1];

    return (tempA === 30 && tempB === 30) ||
        (tempA === 40 && tempB === 40);
};

let runTests = function () {
    let testA = [30, 40];
    let testB = [40, 40];
    let testC = [20, 20];
    let testD = [30];

    console.log(`Testing [${testA}] --> ${doChecking(testA)}`);
    console.log(`Testing [${testB}] --> ${doChecking(testB)}`);
    console.log(`Testing [${testC}] --> ${doChecking(testC)}`);
    console.log(`Testing [${testD}] --> ${doChecking(testD)}`);
};

// Run the test program now....

runTests();