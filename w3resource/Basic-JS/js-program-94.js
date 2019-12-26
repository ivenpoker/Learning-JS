// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Find the number which appears most in a given array of integers.                #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 26, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let findMostOccurring = (arr) => {
    if (!Array.isArray(arr))
        throw new Error(`Expected second argument to be an 'array', got '${typeof(arr)}`);

    arr.sort();
    // console.log(`Sorted array: [${arr}]`);

    let info = {}, track;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in info) {
            info[arr[i]] += 1;
            if (info[track] < info[arr[i]])
                track = arr[i];
        } else {
            info[arr[i]] = 1;
            if (!track)
                track = arr[i];
        }
    }
    // console.log(info);
    // console.log(`track -> ${track}`);
    return track
};

let runTests = () => {
    let testData = [1, 2, 3, 2, 2, 8, 1, 9];
    console.log(findMostOccurring(testData));
};

// Run program test cases
runTests();