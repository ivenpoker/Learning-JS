// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Determines if a variable is numeric or not.                                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: October 25, 2020.                                                              #
// #                                                                                                    #
// ######################################################################################################

const isNumeric = (someVal) => {
    someVal = Number.parseInt(someVal);
    return !Number.isNaN(someVal) && Number.isFinite(someVal);
}

(function () {

    console.log(isNumeric(12));
    console.log(isNumeric("abcd"));
    console.log(isNumeric("12"));
    console.log(isNumeric(""));
    console.log(isNumeric(1.20));
    console.log(isNumeric(-200));


})();