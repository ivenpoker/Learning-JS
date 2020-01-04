// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Extracts out the values at the specified indexes from a specified array.        #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 04, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const validateArray = (arr) => {
    if (!Array.isArray(arr)) {
        throw new TypeError(`Invalid argument type. Expected 'array' got '${typeof(arr)}'`);
    }
};

const doExtraction = (arr, indices) => {
    validateArray(arr);         // Must be an array
    return arr.filter((val, ind) => indices.includes(ind));
};

const runTests = () => {
   console.log(doExtraction(['a', 'b', 'c', 'd', 'e', 'f'], [1, 3]));
   console.log(doExtraction([1, 2, 3, 4, 5, 6, 7], [4]));
};

// Run test program for script
runTests();
