// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks if the first and last elements of an array are equal.                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 20, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let doChecking = function (arrayData) {
    if (!Array.isArray(arrayData))
        throw TypeError('Invalid argument type. Expected an array.');

    return arrayData[0] === arrayData[arrayData.length-1];
};

let runTest = function () {

    let dataA = [1, 3, 5];
    let dataB = [1, 7, 5, 1];
    let dataC = [2, 9, 6];

    console.log(`Testing array [${dataA}] --> [${doChecking(dataA) ? "YES" : "NO"}]`);
    console.log(`Testing array [${dataB}] --> [${doChecking(dataB) ? "YES" : "NO"}]`);
    console.log(`Testing array [${dataC}] --> [${doChecking(dataC) ? "YES" : "NO"}]`);
};

// Run the test cases now ...

runTest();