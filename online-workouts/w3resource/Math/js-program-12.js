// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Determines if a number is a natural number or not.                             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: October 25, 2020.                                                              #
// #                                                                                                    #
// ######################################################################################################

const isNumberNatural = (someNm) => {
    return !Number.isNaN(someNm) && Number.isInteger(someNm) && someNm >= 0;
}

(function () {

    console.log(isNumberNatural(-15));
    console.log(isNumberNatural(1));
    console.log(isNumberNatural(10.22));
    console.log(isNumberNatural(10/0));

})();