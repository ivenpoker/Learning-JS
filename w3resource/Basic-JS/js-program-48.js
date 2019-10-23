// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Reverses a string.                                                             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: October 23, 2019.                                                              #
// #                                                                                                    #
// ######################################################################################################

let reverseString = (str) => {
    let revStr = "";
    for (let x = str.length-1; x >= 0; x--)
        revStr += str[x];
    return revStr;
};

let runTest = () => {
    let stringA = 'Banana';
    let stringB = 'Oranges';

    console.log(`String #1: ${stringA} -- Reverse: ${reverseString(stringA)}`);
    console.log(`String #2: ${stringB} -- Reverse: ${reverseString(stringB)}`);
};

// Run a test for the program
runTest();