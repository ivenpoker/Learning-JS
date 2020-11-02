// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Computes the n-th root of a number.                                            #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: November 2, 2020.                                                              #
// #                                                                                                    #
// ######################################################################################################

const nthRoot = (x, n) => {
    let ng = n % 2;
    if((ng === 1) || x<0)
        x = -x;
    let r = Math.pow(x, 1 / n);
    n = Math.pow(r, n);

    if(Math.abs(x - n) < 1 && (x > 0 === n > 0))
        return ng ? -r : r;
}

(function () {

    console.log(nthRoot(64, 2));
    console.log(nthRoot(64, -2));

})();