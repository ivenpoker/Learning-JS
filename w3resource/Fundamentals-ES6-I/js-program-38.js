// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Pads a string on both sides with the specified characters, if it's shorter than #
// #                     the specified length.                                                           #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 10, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const pad = (str, length, char = ' ') =>
    str.padStart((str.length + length) / 2, char).padEnd(length, char);

const runTests = () => {
    console.log(pad('cat', 8));
    console.log(pad(String(42), 6, '0'));
    console.log(pad('foobar', 3));
};

runTests();