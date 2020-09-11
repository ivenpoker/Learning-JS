// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks whether there is atleast one element which occurs in two given sorted
// #                     arrays of integers.
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 03, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let doTheChecking = (arrA, arrB) => {
    if (!Array.isArray(arrA)) {
        throw new Error(`Invalid first argument type. Expected 'array' got '${typeof(arrA)}'`);
    }
    if (!Array.isArray(arrB)) {
        throw new Error(`Invalid second argument type. Expected 'array' got '${typeof(arrB)}'`);
    }
    for (let i = 0; i < arrA.length; i++) {
        if (arrB.indexOf(arrA[i]) !== -1) {
            return true;
        }
    }
    return false;
};

let runTests = () => {
    console.log(doTheChecking([1,2,3], [3,4,5]));
    console.log(doTheChecking([1,2,3], [5,6,7]));
};

// Run the test cases
runTests();