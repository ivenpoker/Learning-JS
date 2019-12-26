// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Find the maximum difference between any two adjacent elements of a given array  #
// #                     of integers.                                                                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 26, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let findMaximumDifference = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error(`Invalid argument type. Expected 'array', got '${typeof(arr)}'`);
    }
    if (arr.length < 2) return 0;
    let mainDiff = Math.abs(arr[0] - arr[1]);
    for (let i = 1; i < arr.length; i++) {
        if (i+1 < arr.length) {
            let temp = Math.abs(arr[i] - arr[i+1]);
            if (temp > mainDiff)
                mainDiff = temp;
        }
    }
    return mainDiff;
};

// Function returns a random number >= 0 and < 'max'.
let getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

let randomArray = (max, size) => {
    let newData = [];
    for (let i = 0; i < size; i++) {
        newData.push(getRandomInt(max))
    }
    return newData;
};

let runTests = () => {
   let newData = randomArray(10, 20);
   console.log(`New array: [${newData}]`);
   console.log(`Max difference: ${findMaximumDifference(newData)}\n`);

   // Source test data
    console.log(`Max difference: ${findMaximumDifference([1,2,3,8,9])}`);
    console.log(`Max difference: ${findMaximumDifference([1, 2, 3, 18, 9])}`);
    console.log(`Max difference: ${findMaximumDifference([13, 2, 3, 8, 9])}`);



};

// Run the test program
runTests();