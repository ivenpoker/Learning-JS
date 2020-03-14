// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Hashes an input string into a whole number.                                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 14, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const hashToWhole = (str) =>
    str.split('').reduce((hashCode, currentVal) =>
        (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode), 0);

(function () {

    console.log(hashToWhole("This is pretty cool, huh!"));

})();
