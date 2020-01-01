// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks whether a point lies within a circle of specified radius.                #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 01, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

let matrixErrorHandler = (matrix) => {
    if (!Array.isArray(matrix))
        throw new TypeError(`Invalid argument type. Expected 'array' got '${typeof(matrix)}'`)
};

let isLowerTriangular = (matrix) => {
    matrixErrorHandler(matrix);
    for (let i = 0; i < matrix.length; i++) {
        matrixErrorHandler(matrix[i]);
        for (let j = 0; j < matrix[i].length; j++) {
            if (j > i && matrix[i][j] !== 0)
                return false;
        }
    }
    return true;
};

let runTests = () => {
    console.log(isLowerTriangular([[1, 0, 0], [2, 0, 0], [0, 3, 3]]));
    console.log(isLowerTriangular([[1, 0, 1], [2, 0, 0], [0, 3, 3]]));
};

// test the program's functionalities
runTests();