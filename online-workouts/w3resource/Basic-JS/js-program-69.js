// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Compute the sum of three elements of a given array of integers of length 3.     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 20, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let computeArraySum = function (arrayData) {
    if (!Array.isArray(arrayData))
        throw TypeError('Invalid argument. Expected an array.');
    if (arrayData.length !== 3)
        throw TypeError('Invalid length of array. Must be == 3');
    let sum = 0;
    for (let i = 0; i < arrayData.length; i++)
        sum += arrayData[i];
    return sum;
};

let runTests = function () {
    let dataA = [1, 2, 3];
    let dataB = [4, 5, -1];
    let dataC = [4, 5, 9];

    console.log(computeArraySum(dataA));
    console.log(computeArraySum(dataB));
    console.log(computeArraySum(dataC));
};

// Let's now run the tests
runTests();