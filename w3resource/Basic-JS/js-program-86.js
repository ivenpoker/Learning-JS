// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the types of given angles.                                                #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 30, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let inRange = function (lowerBound, val, upperBound) {
    if (Number.isNaN(lowerBound) || Number.isNaN(val) || Number.isNaN(upperBound)) {
        throw new TypeError(`Invalid argument type(s). Must be all numbers`);
    }
    return lowerBound <= val && val <=  upperBound;
};

let findAngleType = function (angle) {
    if (Number.isNaN(angle)) {
        throw new TypeError(`Invalid argument type. Expected number, got '${typeof(angle)}'`);
    }
    if (inRange(0, angle, 89)) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (inRange(90, angle, 179)) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight line";
    }
};

let runTests = function () {
    console.log(findAngleType(47));
    console.log(findAngleType(90));
    console.log(findAngleType(145));
    console.log(findAngleType(180));
};

// Run the test cases ...
runTests();