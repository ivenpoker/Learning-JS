// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Compute the new ratings between two or more opponents using the Elo rating      #
// #                     system.                                                                         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 14, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const elo = ([...ratings], kFactor = 32, selfRating) => {
    const [a, b] = ratings;
    const expectedScore = (self, opponent) => 1 / (1 + 10 ** ((opponent - self) / 400));
    const newRating = (rating, i) =>
        (selfRating || rating) + kFactor * (i - expectedScore(i ? a : b, i ? b : a));
    if (ratings.length === 2) {
        return [newRating(a, 1), newRating(b, 0)];
    }
    for (let i = 0, len = ratings.length; i < len; i++) {
        let j = i;
        while (j < len - 1) {
            j++;
            [ratings[i], ratings[j]] = elo([ratings[i], ratings[j]], kFactor);
        }
    }
    return ratings;
};

(() => {

    console.log(elo([1200, 1200]));
    console.log(elo([1200, 1200], 64));
    console.log(elo([1200, 1200, 1200, 1200]).map(Math.round));

})();
