// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Hashes a given input string into a whole number.                                #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 17, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const sdbm = (str) =>
    str.trim().split('').reduce((hashCode, currentVal) =>
        (hashCode = currentVal.charCodeAt(0) + (hashCode << 6)
            + (hashCode << 16) - hashCode)
    , 0);

(() => {

    console.log(sdbm('w3r'));
    console.log(sdbm('name'));

})();