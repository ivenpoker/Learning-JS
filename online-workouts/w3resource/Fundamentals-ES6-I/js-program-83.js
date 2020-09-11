// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates a new string with the results of calling a provided function on every   #
// #                     character in the calling string.                                                #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 15, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const processString = (someStr = '', func=f=>f) =>
    someStr.trim().split('').map((char) => func(char))
        .reduce((acc, char) => acc + char, '');

(() => {

    console.log(processString("just some code", (val) => String(val).toUpperCase()));
    console.log(processString("JUST SOME TEST CASE", (val) => String(val).toLowerCase()));

})();