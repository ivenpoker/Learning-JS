// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Create a new string of specified copies (positive number) of a given string.    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: October 29, 2019.                                                               #
// #                                                                                                     #
// #######################################################################################################

function makeSpecifiedCopies(mainStr, numCopies) {
    if (typeof (numCopies).toString().indexOf('number') < 0)
        throw new TypeError('Invalid type of number of copies. Expected a +ve number');
    if (numCopies < 0)
        throw new TypeError('Only positive numbers accepted');
    let newStr = '';
    for (let i = 0; i < numCopies; i++)
        newStr += mainStr;
    return newStr;
}

function runTestCases() {
    let strA = 'one';
    let strB = 'two';
    let strC = 'three';

    console.log(`${strA} --> ${makeSpecifiedCopies(strA, 4)}`);
    console.log(`${strB} --> ${makeSpecifiedCopies(strB, 5)}`);
    console.log(`${strC} --> ${makeSpecifiedCopies(strC, 6)}`);
}

// Now, lets run some tests
runTestCases();