// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Rotates the elements of an array of length 3.                                   #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 20, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let rotateArrayData = function (arrayData) {

    if (!Array.isArray(arrayData))
        throw TypeError('Invalid argument. Expected an array');
    if (arrayData.length !== 3)
        throw TypeError("Invalid size of array. Array size must be == 3");

    let temp = arrayData[0];
    for (let i = 1; i < arrayData.length; i++)
        arrayData[i-1] = arrayData[i];
    arrayData[arrayData.length-1] = temp;

    return arrayData;
};

let runTests = function () {
    let newArrayData = [5, 4, 2];
    console.log(`  Original array data: [${newArrayData}]`);
    console.log(` After first rotation: [${rotateArrayData(newArrayData)}]`);
    console.log(`After second rotation: [${rotateArrayData(newArrayData)}]`);
    console.log(` After third rotation: [${rotateArrayData(newArrayData)}]`);
};

runTests();