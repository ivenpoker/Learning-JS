// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the maximum integer n such that 1 + 2 + ... + n <= a given integer.       #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 03, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const sum = (val) => {
    let sn = 0;
    let i = 0;
    while (sn <= val) {
        sn += i++;
    }
    return i-2;
};

const runTests = () => {
    console.log(sum(11));
    console.log(sum(15));
};

// Run tests cases
runTests();