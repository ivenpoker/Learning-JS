// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks if 1 appears in the first or last position of a given array of integers. #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 20, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let doChecking = function (arrayData) {

    // Basic data checking...

    if (!Array.isArray(arrayData))
        throw TypeError('Invalid argument. Must be an array.');
    if (arrayData.length < 1)
        throw TypeError('Invalid array length. Must be > 1');

    return arrayData[0] === 1 || arrayData[arrayData.length-1] === 1;

};

let runTests = function () {

    let dataA = [1, 3, 5];
    let dataB = [1, 3, 5, 1];
    let dataC = [2, 4, 6];

    console.log(`Testing array [${dataA}] --> [${doChecking(dataA) ? "YES" : "NO"}]`);
    console.log(`Testing array [${dataB}] --> [${doChecking(dataB) ? "YES" : "NO"}]`);
    console.log(`Testing array [${dataC}] --> [${doChecking(dataC) ? "YES" : "NO"}]`);

};

// Running the test cases ...

runTests();