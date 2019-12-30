// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks whether a given string represents a correct sentence or not. A string is #
// #                     considered correct sentence if it starts with the capital letter and ends with  #
// #                     full stop (.).                                                                  #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 30, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let isSentence = (inputStr) => {
    if (inputStr.length === 0)
        return false;
    let fstChar = inputStr[0];
    return (inputStr[0].toUpperCase() === fstChar) && (inputStr[inputStr.length-1] === '.');
};

let runTests = () => {
    console.log(isSentence("This tool will help you write better English and efficiently corrects texts."));
    console.log(isSentence("This tool will help you write better English and efficiently corrects texts"));
    console.log(isSentence("this tool will help you write better English and efficiently corrects texts."));
};

// run test program
runTests();