// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates an array of prefix sums of the given array.                             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 02, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const prefixSum = (arr) => {
    if (!Array.isArray(arr)) {
        throw new TypeError(`Invalid argument type. Expected 'array' got '${arr}'`);
    }
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = 0;
        for (let j = 0; j < i+1; j++) {
            newArr[i] += arr[j];
        }
    }
    return newArr;
};

const runTests = () => {
    console.log(prefixSum([1, 2, 3, 4, 5]));
    console.log(prefixSum([1, 2, -3, 4, 5]));
};

// Run test for this program
runTests();