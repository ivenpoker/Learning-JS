// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Runs a given array of promises in series.                                       #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 14, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const runPromisesInSeries = (ps) =>
    ps.reduce((p, next) => p.then(next), Promise.resolve());

const delay = (d) => new Promise(r => setTimeout(r, d));

(function () {

    runPromisesInSeries([() => delay(1000), () => delay(2000)]);

})();
