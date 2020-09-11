// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Truncates a string up to a specified length.                                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 20, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const truncateStr = (str = '', maxLength = 0) =>
    str.length > maxLength ? str.slice(0, maxLength > 3 ? maxLength - 3 : maxLength) + '...' : str;

(() => {

    console.log(truncateStr('boomerang', 7));

})();