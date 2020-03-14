// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Sorts characters of a string alphabetically.                                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 14, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const sortStringCharsA = (str) => str.split('').sort().join('');

(function () {

    const strA = "cabbage";
    const strB = "a7fs23l1n4o6x";

    console.log("[1] Sorted A:", sortStringCharsA(strA));
    console.log("[1] Sorted B:", sortStringCharsA(strB));

    console.log("\n");

})();

