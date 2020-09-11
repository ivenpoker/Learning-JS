// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Generates random hexadecimal color codes.                                       #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 04, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

const runTests = (max) => {
    Array(max).fill(0).forEach((_, ind) => {
        console.log(`Color code #${ind+1}: ${randomHexColorCode()}`);
    });
};

// Run test programs
runTests(10);