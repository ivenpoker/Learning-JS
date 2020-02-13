// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Computes the average of an array, after mapping each element to a value using   #
// #                     the provided function.                                                          #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 13, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const computeAverage = (arr = [], func = f => f) =>
    arr.map((val) => func(val)).reduce((acc, val) => acc + val, 0) / arr.length;

const runTest = () => {

    // compute the average of all even numbers in array
    console.log(computeAverage([1, 2, 3, 4, 5, 6], (val) => val % 2 === 0 ? val : 0));

    // Compute the average of all odd numbers in array.
    console.log(computeAverage([1, 2, 3, 4, 5, 6], (val) => val % 2 !== 0 ? val : 0));
};

runTest();