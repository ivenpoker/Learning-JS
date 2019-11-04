// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Extracts the first half of a string of even length.                             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 4, 2019.                                                               #
// #                                                                                                     #
// #######################################################################################################

let getFirstHalf = function (mainStr) {
    if (typeof (mainStr) != 'string') {
        throw TypeError("Invalid argument type");
    }
    if (mainStr.length % 2 !== 0) {
        return '[ERROR: length must be even]'
    }
    return mainStr.slice(0, mainStr.length/2);
};

let runTestCases = function () {
    let strA = 'James is King';
    let strB = 'Files are many';
    let strC = 'Peter';
    let strD = 'Jonathan';

    console.log(`Main string: ${strA} --> ${getFirstHalf(strA)}`);
    console.log(`Main string: ${strB} --> ${getFirstHalf(strB)}`);
    console.log(`Main string: ${strC} --> ${getFirstHalf(strC)}`);
    console.log(`Main string: ${strD} --> ${getFirstHalf(strD)}`);
};

// Let's run the test cases

runTestCases();