// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Uses the Pythagorean Theorem to compute the other side of a triangle.          #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: November 2, 2020.                                                              #
// #                                                                                                    #
// ######################################################################################################

const pythagoreanTheorem = (sideA = 0, sideB = 0) =>
    Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));


(function () {

    console.log(pythagoreanTheorem(2, 4));
    console.log(pythagoreanTheorem(3, 4));

})();