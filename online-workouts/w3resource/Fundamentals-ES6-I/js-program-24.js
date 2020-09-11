// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: De-capitalize the first letter of a string.                                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 10, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const capitalizeFirstLetter = ([first, ...rest], toUpper = false) =>
                toUpper ? [first.toUpperCase(), ...rest].join('') :
                        [first.toLowerCase(), ...rest].join('');

const runTests = () => {
    console.log(capitalizeFirstLetter('james', true));
    console.log(capitalizeFirstLetter('peter', true));
    console.log(capitalizeFirstLetter('Suzanne', false));
};

runTests();