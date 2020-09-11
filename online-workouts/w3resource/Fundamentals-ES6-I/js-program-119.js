// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates tomorrow's date in string representation.                               #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 21, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const getTomorrowDate = (long = false) => {
    let now = new Date();
    now.setDate(now.getDate() + 1);
    const ret = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    return !long ? ret : `${ret}T00:00:00`;
};

(() => {

    console.log(getTomorrowDate());
    console.log(getTomorrowDate(true));

})();