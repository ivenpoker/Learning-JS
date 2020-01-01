// ########################################################################################################
// #                                                                                                      #
// #    Program Purpose: Checks whether a given array of integers represents either a strictly increasing #
// #                     or a strictly decreasing sequence.                                               #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                            #
// #       Program Date: January 01, 2020.                                                                #
// #                                                                                                      #
// ######################################################################################################## v

const validateData = (arr) => {
    if (!Array.isArray(arr))
        throw new TypeError(`Invalid argument type. Expected 'array' got '${typeof(arr)}'`);
};

const isStrictlyIncreasing = (arr) => {
    validateData(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= arr[i+1]) {
            return false;
        }
    }
    return true;
};

const isStrictlyDecreasing = (arr) => {
    validateData(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i+1] <= arr[i]) {
            return false;
        }
    }
    return true;
};

const runTests = () => {
     console.log(isStrictlyIncreasing([1, 2, 3]));
     console.log(isStrictlyIncreasing([1, 2, 2]));
     console.log(isStrictlyDecreasing([-3, -2, -1]));
};

// run the test program
runTests();