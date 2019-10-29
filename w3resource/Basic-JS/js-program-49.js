// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Replaces every character in a given string with the character following        #
// #                     it in the alphabet.                                                            #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: October 23, 2019.                                                              #
// #                                                                                                    #
// ######################################################################################################

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let doReplacements = (mainString) => {
    let newStr = '';
    for (let x = 0; x < mainString.length; x++) {
        let tempChar = mainString[x];
        let tempCharStr = `${tempChar}`;
        if (tempCharStr === tempCharStr.toUpperCase()) {
            tempCharStr = tempCharStr.toLowerCase();
            let nextInd = (alphabet.indexOf(tempCharStr) + 1) % alphabet.length;
            newStr += alphabet[nextInd].toUpperCase();
        } else {
            let nextInd = (alphabet.indexOf(`${tempChar}`) + 1) % alphabet.length;
            newStr += alphabet[nextInd];
        }
    }
    return newStr;
};

let runTests = () => {
    let stringA = 'PYTHON';
    let stringB = 'JavaScript';
    let stringC = 'pascal';

    console.log(`String A: ${stringA} --- After replacement: ${doReplacements(stringA)}`);
    console.log(`String B: ${stringB} --- After replacement: ${doReplacements(stringB)}`);
    console.log(`String C: ${stringC} --- After replacement: ${doReplacements(stringC)}`);
};

// Test the program now.
runTests();