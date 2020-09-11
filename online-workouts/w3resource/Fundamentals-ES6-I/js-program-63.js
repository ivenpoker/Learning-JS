// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Clone a given regular expression.                                               #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 13, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const cloneRegExp = (regExp) => new RegExp(regExp.source, regExp.flags);

const runTests = () => {
    const regExp = /lorem ipsum/gi;
    console.log('Regular Expression:', regExp);
    const regExp2 = cloneRegExp(regExp);
    console.log('Cloned Expression:', regExp2);
};

runTests();