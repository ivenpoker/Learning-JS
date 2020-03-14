// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Randomize the order of the values of an array, returning a new array.           #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 14, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const shuffleData = (data = []) => {
    let m = data.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [data[m], data[i]] = [data[i], data[m]];
    }
    return data;
};

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

    console.log("Shuffle A:", shuffleData(arrayA));
    console.log("Shuffle B:", shuffleData(arrayB));


})();