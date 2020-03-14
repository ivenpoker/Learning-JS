// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates an array of elements whose contents appear in two different arrays.     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 14, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const findIntersectionAlgoA = (arrA = [], arrB = []) =>
    [...arrA].filter((val) => arrB.indexOf(val) >= 0);

const findIntersectionAlgoB = (arrA = [], arrB = []) =>
    [...arrA].filter((val) => arrB.includes(val));

const printLine = (char = '-', times = 15) => {
    let line = '';
    Array(times).fill(0).forEach(() => {
        line += char;
    });
    console.log(line);
};

(function () {

    const arrayA = [1, 5, 19, 2, 4, -1, 0];
    const arrayB = [5, 9, -1, 2, -20, 14];

    console.log("Array A:", arrayA);
    console.log("Array B:", arrayB);

    printLine('-', 35);

    console.log("Intersection Algo-A:", findIntersectionAlgoA(arrayA, arrayB));
    console.log("Intersection Algo-B:", findIntersectionAlgoB(arrayA, arrayB));

})();