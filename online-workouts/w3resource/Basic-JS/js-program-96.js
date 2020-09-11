// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Computes the sum of absolute difference of consecutive numbers of a given array #
// #                     of integers.                                                                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 26, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let computeSumOfAbsoluteDifference = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error(`Invalid argument type. Expected 'array', got '${typeof(arr)}'`)
    }
    let sum = 0;
    for (let i = 0; i < arr.length-1; i++) {
        sum += Math.abs(arr[i+1] - arr[i]);
    }
    return sum;
};

let runTests = () => {
    console.log(computeSumOfAbsoluteDifference([1, 2, 3, 2, -5]));
};

// Run test program
runTests();