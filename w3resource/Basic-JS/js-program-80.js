// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Swaps array first and last element. Array length must be at least 1.            #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 21, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let doSwapping = function (arrayData) {
    if (!Array.isArray(arrayData))
        throw TypeError(`Invalid argument type. Expected array, got ${typeof(arrayData)}`);
    if (arrayData.length < 1)
        throw Error(`Invalid length of array. Must be > 1`);
    let temp = arrayData[0];
    arrayData[0] = arrayData[arrayData.length-1];
    arrayData[arrayData.length-1] = temp;

    return arrayData;
};

let runTests = function () {
    let dataA = [1, 2, 3, 4];
    let dataB = [5, 6, 2];

    console.log(`After swapping ${dataA} --> [${doSwapping(dataA)}]`);
    console.log(`After swapping ${dataB} --> [${doSwapping(dataB)}]`);
};

// Running the main program tests...

runTests();