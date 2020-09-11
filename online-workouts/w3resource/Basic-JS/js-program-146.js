// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Computes the sum of cubes of all integer from 1 to an given integer.            #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 03, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const computeCubeSum = (maxVal) => {
    let sum = 0;
    for (let i = 1; i <= maxVal; i++) {
        sum += Math.pow(i, 3);
    }
    return sum;
};

const runTests = () => {
    console.log(computeCubeSum(3));
    console.log(computeCubeSum(4));
};

// Run tests program
runTests();