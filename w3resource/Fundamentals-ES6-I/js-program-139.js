// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Splits a multiline string into an array of lines.                               #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 03, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const splitMultiLine = (data = '') =>
    data.trim().split('\n').map((line) => line);

(function () {

    const newData =  splitMultiLine("This is line 1\nThis is line 2\n" +
        "This is line 3\n This is line 3");
    console.log(newData)
})(); 