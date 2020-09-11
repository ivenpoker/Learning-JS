// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds two elements of the array such that their absolute difference is not      #
// #                     greater than a given integer but is as close to the said integer.               #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 03, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let doProcessing = (arr, num) => {
    if (!Array.isArray(arr))
        throw new Error(`Expected argument of type 'array', got '${typeof(arr)}`);
    let results = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            let temp = Math.abs(arr[i] - arr[j]);
            if (temp <= num) {
                results.push({
                    valA: arr[i],
                    valB: arr[j],
                    diff: temp
                });
            }
        }
    }
    return results;
};

let runTests = () => {
    let dataA = doProcessing([12, 10, 33, 34], 10);
    let dataB = doProcessing([12, 10, 33, 34], 24);
    let dataC = doProcessing([12, 10, 33, 44], 40);

    console.log(dataA);
    console.log(dataB);
    console.log(dataC);
};

// Run the program test cases
runTests();