// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Changes the characters (lower case) in a string where 'a' turns to 'z', 'b'     #
// #                     turns to 'y', 'c' turns into 'x', ..., 'n' turns into 'm', 'm' turns into 'n',  #
// #                     'z' turns in to 'a'.                                                            #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 02, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const changeLetters = (someStr) => {
    let letters = someStr.split('');

    let newLetters = letters.map((char) => {
        let ind = alphabet.indexOf(char);
        let newInd = (alphabet.length-1) - ind;
        return alphabet.charAt(newInd);
    });
    return newLetters.join('');
};

const runTests = () => {
    console.log(changeLetters('abcxyz'));
    console.log(changeLetters('python'));
};

// Run script tests.
runTests();