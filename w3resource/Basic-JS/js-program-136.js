// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Replaces the first digit in a string (should contain at least a digit) with $   #
// #                     character.                                                                      #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 02, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const isNumeric = (num) => {
    return !Number.isNaN(num - Number.parseFloat(num));
};

const doReplacement = (mainStr, charRep) => {
    let chars = mainStr.split('');
    for (let i = 0; i < chars.length; i++) {
        if (isNumeric(chars[i])) {
            chars[i] = charRep;
            break;
        }
    }
    return chars.join('');
};

const runTests = () => {
   console.log(doReplacement('abc1dabc', '$'));
   console.log(doReplacement('p3ython', '$'));
   console.log(doReplacement('ab1cabc', '$'));
};

// Run the main test cases
runTests();
