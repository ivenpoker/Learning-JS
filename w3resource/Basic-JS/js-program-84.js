// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Replaces each character of a given string by the next one in the English        #
// #                     alphabet.                                                                       #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 30, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

const alphabet = "abcdefghijklmnopqrstuvwxyz";

let isString = function (data) {
    return typeof(data) === 'string';
};

let replaceWithNextCharacter = function (data) {
    if (!isString(data)) {
        throw new TypeError(`Invalid argument Type. Expected string got '${typeof(data)}'`);
    }
    let newData = data.split('');
    newData = newData.map(function (val) {
        let ind = alphabet.indexOf(val);
        if (ind !== -1) {
            ind = (ind + 1) % alphabet.length;
            return alphabet[ind];
        } else {
            return val;
        }
    });
    return newData.join('');
};

let runTests = function () {
    let test = "abcdxyz";
    console.log(`After shifting '${test}' ... ${replaceWithNextCharacter(test)}`);
};

// Run test cases ...
runTests();