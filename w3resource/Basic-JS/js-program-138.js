// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Reverse the bits of a given 16 bits unsigned short integer.                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 02, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const sixteenBitsReverse = (num) => {
    let result = 0;
    for (let i = 0; i < 16; i++) {
        result = result * 2 + (num % 2);
        num = Math.floor(num / 2);
    }
    return result;
};

const runTests = () => {
    console.log(sixteenBitsReverse(12345));
    console.log(sixteenBitsReverse(10));
    console.log(sixteenBitsReverse(5));
};

// Run test script program
runTests();

