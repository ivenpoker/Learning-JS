// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Change the capitalization of all letters in a given string.                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 03, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const changeCapitalization = (mainStr) => {
    return mainStr.split('').map((elem) => {
        if (elem === elem.toLowerCase()) {
            return elem.toUpperCase();
        } else if (elem === elem.toUpperCase()) {
            return elem.toLowerCase();
        } else {
            return elem;
        }
    }).join('');
};

const runTests = () => {
    console.log(changeCapitalization('w3resource'));
    console.log(changeCapitalization('Germany'));
};

// Run sample tests for program
runTests();

