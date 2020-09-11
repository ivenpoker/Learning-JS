// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Extends a 3-digit color code to a 6-digit color code.                           #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 03, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const extendHex = (shortHex) => {
    return '#' + shortHex.slice(shortHex.startsWith('#') ? 1 : 0)
        .split('')
        .map((char) => `${char}${char}`)
        .join('');
};

const runTests = () => {
    console.log(extendHex('#03f'));
    console.log(extendHex('05a'));
};

runTests();