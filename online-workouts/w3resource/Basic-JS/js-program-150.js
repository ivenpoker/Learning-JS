// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Swap pairs of adjacent digits of a given integer of even length.                #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 03, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const swapDigitPairs = (num) => {
    if (num % 2 !== 0) {
        return false;
    }
    let result = 0;
    let x = 1;

    while (num !== 0) {
        let dg1 = num % 10;
        let dg2 = ((num - dg1) / 10) % 10;
        result += x * (10 * dg1 + dg2);
        num = Math.floor(num / 100);
        x *= 100;
    }
    return result;
};

const runTests = () => {
    console.log(swapDigitPairs(1234));
    console.log(swapDigitPairs(123456));
    console.log(swapDigitPairs(12345));
};

// Run test cases for program
runTests();