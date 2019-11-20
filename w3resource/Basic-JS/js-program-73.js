// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Reverses the elements of an array.                                              #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 20, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let doChecking = function (arrayData) {

    if (!Array.isArray(arrayData))
        throw TypeError('Invalid argument type. Must be an array.');

    return arrayData.reverse();
};

let runTests = function () {

    let dataA = [1, 6, 6];
    let dataB = [5, 8, 1];
    let dataC = [9, 1, 4];

    console.log(`After reversing [${dataA}]: [${doChecking(dataA)}]`);
    console.log(`After reversing [${dataB}]: [${doChecking(dataB)}]`);
    console.log(`After reversing [${dataC}]: [${doChecking(dataC)}]`);
};

// Running the tests ...

runTests();