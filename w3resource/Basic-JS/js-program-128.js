// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the smallest round number that is not less than a given value.            #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 02, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

let nearestRoundNumber = (num) => {
    while (num % 10) {
        num++;
    }
    return num;
};

let runTests = () => {
    console.log(nearestRoundNumber(56));
    console.log(nearestRoundNumber(592));
};

// Run test program
runTests();