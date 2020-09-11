// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Create a new string of 4 copies of the last 3 characters of a given original    #
// #                     string. The length of the given string must be 3 and above.                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 4, 2019.                                                               #
// #                                                                                                     #
// #######################################################################################################

let make4CopiesOfLast3Chars = function (mainStr) {
    if (typeof(mainStr) != 'string')
        throw TypeError('Invalid argument type');
    if (mainStr.length < 3)
        throw Error('Invalid string length. Must be >= 3');
    return mainStr.slice(mainStr.length-3).repeat(3);
};


let runTests = function () {
    let strA = "James is King";
    let strB = "Javascript";
    let strC = "Python";
    console.log(`Main string: ${strA} --> ${make4CopiesOfLast3Chars(strA)}`);
    console.log(`Main string: ${strB} --> ${make4CopiesOfLast3Chars(strB)}`);
    console.log(`Main string: ${strC} --> ${make4CopiesOfLast3Chars(strC)}`);
};

// Now lets run the test cases

runTests();