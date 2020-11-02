// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Evaluates binomial coefficients.                                               #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: November 2, 2020.                                                              #
// #                                                                                                    #
// ######################################################################################################

const fact = (val) => val < 1 ? 1 : val * fact(val-1);
const binomialCoefficient = (nVal, kVal) => (fact(nVal)) / (fact(kVal) * fact(nVal - kVal));

(function () {

    console.log(binomialCoefficient(8, 3));
    console.log(binomialCoefficient(10, 2));

})();