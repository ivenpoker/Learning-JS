// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the larger value between the first or last and set all the other elements #
// #                     with that value. Displays the new array.                                        #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 20, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let doComputations = function (arrayData) {

    if (!Array.isArray(arrayData))
        throw TypeError('Invalid argument. Must be an array');

    let maxVal = Math.max(arrayData[0], arrayData[arrayData.length-1]);
    for (let i = 0; i < arrayData.length; i++)
        arrayData[i] = maxVal;

    return arrayData;
};

let runTests = function () {

    let dataA = [1, 3, 4, 8, 4];
    let dataB = [8, 5, 2, 5, 2];
    let dataC = [4, 5, 6, 2, 4];

    console.log(`New array from [${dataA}] --> [${doComputations(dataA)}]`);
    console.log(`New array from [${dataB}] --> [${doComputations(dataB)}]`);
    console.log(`New array from [${dataC}] --> [${doComputations(dataC)}]`);
};

// Run the tests now ....

runTests();