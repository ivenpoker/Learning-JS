// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Converts the letter of a given string to alphabetic order.                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: October 29, 2019.                                                              #
// #                                                                                                    #
// ######################################################################################################

function convertStringToAlphabeticOrder(mainString) {
    let tempData = mainString.split('').sort();
    return tempData.join('');
}

function runTests() {
    let strA = 'Programming';
    let strB = 'Python';
    let strC = 'Exercises';

    console.log(`${strA} --> ${convertStringToAlphabeticOrder(strA)}`);
    console.log(`${strB} --> ${convertStringToAlphabeticOrder(strB)}`);
    console.log(`${strC} --> ${convertStringToAlphabeticOrder(strC)}`);
}

// Run the test cases

runTests();