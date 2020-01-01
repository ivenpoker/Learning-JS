// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds whether the members of a given array of integers is a permutation of      #
// #                     numbers from 1 to a given integer.                                              #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 01, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const isPermutation = (inputArr, n) => {
    if (!Array.isArray(inputArr))
        throw new TypeError(`Invalid first argument type. Expected 'array' got '${typeof(inputArr)}'`);
    for (let i = 0; i < n; i++) {
        if (inputArr.indexOf(i+1) < 0) {
            return false;
        }
    }
    return true;
};

const runTests = () => {
   console.log(isPermutation([1,2,3,4,5], 5));
   console.log(isPermutation([1,2,3,5], 5));
};

// run test program
runTests();