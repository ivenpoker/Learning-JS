// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Removes non-printable ASCII characters from a given string.                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 04, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const removeNonASCII = (str) => {
    return str.replace(/[^\x20-\x7E]/g, '');
};

const runTests = () => {
    console.log(removeNonASCII('äÄçÇéÉêw3resouröceÖÐþúÚ'))
};

// Run tests for program
runTests();
