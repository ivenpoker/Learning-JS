// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Returns true if the string is y/yes or false if the string is n/no.             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 10, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const yesNo = (val, def = false) =>
    /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;

const runTests = () => {
    console.log(yesNo('Y'));
    console.log(yesNo('yes'));
    console.log(yesNo('No'));
    console.log(yesNo('Foo', true));
};

runTests();