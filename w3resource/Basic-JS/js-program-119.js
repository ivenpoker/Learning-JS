// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks whether a point lies within a circle of specified radius.                #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 01, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

let checkAPoint = (a, b, x, y, r) => {
    let dist_points = (a - x) * (a - x) + (b - y) * (b - y);
    r *= r;
    return dist_points < r;
};


let isPointInCircle = (circle, point) => {
    console.log(checkAPoint(0, 0, 2, 4, 6));
    console.log(checkAPoint(0, 0, 6, 8, 6));
};