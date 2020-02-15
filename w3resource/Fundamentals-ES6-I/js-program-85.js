// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Replaces all but the last number of characters with the specified mask          #
// #                     character                                                                       #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 15, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const doReplacement = (someStr = '', maskChar = '', lastRemaining = 1) =>
    someStr.trim().split('')
                .map((char, i) => i < someStr.length- lastRemaining ? maskChar : char)
                .join('');

(() => {

    console.log(doReplacement('This is a test case', '*', 2));
    console.log(doReplacement('Just testing', '_', 4));
    console.log(doReplacement("This is working", '_'));

})();