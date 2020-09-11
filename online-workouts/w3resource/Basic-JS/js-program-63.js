// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Create a string using the middle three characters of a given string of odd      #
// #                     length. The string length must be greater or equal to three.                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 4, 2019.                                                               #
// #                                                                                                     #
// #######################################################################################################

let isString = function (str) {
    return typeof (str) === 'string';
};

let getNewStringFromMiddle = function (str) {
    if (!isString(str))
        throw new TypeError('Argument must be a string object');
    if (str.length % 2 === 0)
        throw Error(`Length of string ['${str.toString()}'] must be odd and >= 3`);

    let tempA = str[Number.parseInt(`${(str.length/2 - 1)}`)];
    let tempB = str[Number.parseInt(`${(str.length/2) + 1}`)];

    return tempA + str[Number.parseInt(`${str.length/2}`)] + tempB;
};

let runSomeTestCases = function () {
   let strA = "Testing";
   let strB = "James";

   console.log(`strA: ${strA} --> ${getNewStringFromMiddle(strA)}`);
   console.log(`strB: ${strB} --> ${getNewStringFromMiddle(strB)}`);
};

// Now let's run the test cases
runSomeTestCases();