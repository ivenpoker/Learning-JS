// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Check if the characters a and b are separated by exactly 3 places anywhere     #
// #                     (at least once) in a given string.                                             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: October 29, 2019.                                                              #
// #                                                                                                    #
// ######################################################################################################

function ab_Check(str) {
    return (/a...b/).test(str) || (/b...a/).test(str);
}

function runTests() {
    console.log(ab_Check("Chainsbreak"));
    console.log(ab_Check("pane borrowed"));
    console.log(ab_Check("abCheck"));
}

// Run the test program.

runTests();

