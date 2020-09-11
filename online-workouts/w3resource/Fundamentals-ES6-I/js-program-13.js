// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Converts the length of a given string in bytes.                                 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 04, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const byteSize = (str) => new Blob([str]).size;

const runTests = () => {
    console.log(byteSize('123456'));
    console.log(byteSize('Hello World'));
    console.log(byteSize('Ã¢'));
};

// Run test program
runTests();