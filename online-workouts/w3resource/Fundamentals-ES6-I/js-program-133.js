// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the symmetric difference between two given arrays, after applying the      #
// #                     provided function to each array element of both.                                #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 24, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const findSymmetricDifference = (arrA = [], arrB = [], comp=f=>f) => {
    const sA = new Set(arrA.map((v) => comp(v)));
    const sB = new Set(arrB.map((v) => comp(v)));
    return [...arrA.filter((x) => !sB.has(comp(x))), ...arrB.filter((x) => !sA.has(comp(x)))]
};

(function () {

    console.log(findSymmetricDifference([2.1, 1.2], [2.3, 3.4], Math.floor));

})();