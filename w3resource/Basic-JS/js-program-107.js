// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the number of sorted pairs formed by it's elements of a given array of    #
// #                     of integers such that one element in the pair is divisible by the other.        #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 26, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let findThePairs = (arr) => {
    if (!Array.isArray(arr))
        throw new Error(`Invalid argument type. Expected an 'array', got '${typeof(arr)}'`);
    let foundPairs = [];

    let foundInPairs = (valA, valB) => {
        for (let i = 0; i < foundPairs.length; i++) {
            if ((foundPairs[i].valA === valA && foundPairs[i].valB === valB) ||
                (foundPairs[i].valA === valB && foundPairs[i].valB === valA)) {
                return true;
            }
        }
        return false;
    };

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if ((arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0)
                        && !foundInPairs(arr[i], arr[j])) {
                foundPairs.push({
                    valA: arr[i],
                    valB: arr[j],
                })
            }
        }
    }
    return foundPairs;
};

let runTests = () => {
     console.log(findThePairs([1,2,3]));
     console.log(findThePairs([2,4,6]));
     console.log(findThePairs([2,4,16]));
};

// Run the tests
runTests();