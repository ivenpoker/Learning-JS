// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Determines if a number is a power of 2 or not.                                 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: October 25, 2020.                                                              #
// #                                                                                                    #
// ######################################################################################################

const isNumberAPowerOfTwo = (someNum) => {
    if (Number.isNaN(someNum) || !Number.isFinite(someNum)) {
        return false;
    }
    return Math.sqrt(someNum) % 2 === 0;
}

(function () {

    console.log(isNumberAPowerOfTwo(16));
    console.log(isNumberAPowerOfTwo(18));
    console.log(isNumberAPowerOfTwo(256));

})();