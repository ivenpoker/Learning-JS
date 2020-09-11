// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Find the position of a rightmost round number in an array of integers. Returns  #
// #                     0 if there are no round number.                                                 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 02, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const findRightmostRoundNumber = (inputNum) => {
    let result = 0;
    for (let i = 0; i < inputNum.length; i++) {
        if (inputNum[i] % 10 === 0) {
            result = i;
        }
    }
    return result;
};

const runTests = () => {
    console.log(findRightmostRoundNumber([1, 22, 30, 54, 56]));
    console.log(findRightmostRoundNumber([1, 22, 32, 4, 56]));
    console.log(findRightmostRoundNumber([1, 22, 32, 54, 50]));
};

// Run tests for program
runTests();