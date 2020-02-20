// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Converts a given string into an array of words.                                 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 20, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const makeWords = (str = '', pattern = /[^a-zA-Z-]+/) =>
    str.split(pattern).filter(Boolean);

(() => {

    console.log(makeWords('I love JavaScript!'));
    console.log(makeWords('python, java, php'));

})();
    
