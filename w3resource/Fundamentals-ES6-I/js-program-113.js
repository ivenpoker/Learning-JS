// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Unescapes HTML characters.                                                      #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 20, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const unescapeHTML = str =>
    str.replace(
        /&|<|>|'|"/g,
        tag =>
            ({
                '&': '&',
                '<': '<',
                '>': '>',
                "'": "'",
                '"': '"'
            }[tag] || tag)
    );

(() => {

    console.log(unescapeHTML('<a href="#">Me & You</a>'));

})();

