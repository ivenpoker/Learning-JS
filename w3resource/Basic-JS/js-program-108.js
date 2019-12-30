// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates the dot products of two given 3D vectors.                               #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 30, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let dotProduct = (vectA, vectB) => {
    let result = 0;
    for (let i = 0; i < 3; i++) {
        result += vectA[i] * vectB[i];
    }
    return result;
};

let runTests = () => {
    console.log(dotProduct([1, 2, 3], [1, 2, 3]));
    console.log(dotProduct([2, 4, 6], [2, 4, 6]));
    console.log(dotProduct([1, 1, 1], [0, 1, -1]));
};

// Run the test program now.
runTests();