// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates a new string without the first and last character of a given string.    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 4, 2019.                                                               #
// #                                                                                                     #
// #######################################################################################################

let removeFirstAndLast = function (mainStr) {
    return mainStr.trim().length <= 2 ? '' : mainStr.trim().slice(1, mainStr.length-1);
};

let runTestCases = function () {
    let strA = 'James is King';
    let strB = 'K';
    let strC = "Peter";
    let strD = ' ';
    let strE = 'Kingdom';

    console.log(`Main str: '${strA}' --> ${removeFirstAndLast(strA)}`);
    console.log(`Main str: '${strB}' --> ${removeFirstAndLast(strB)}`);
    console.log(`Main str: '${strC}' --> ${removeFirstAndLast(strC)}`);
    console.log(`Main str: '${strE}' --> ${removeFirstAndLast(strD)}`);
};

// Run the test and display the results
runTestCases();