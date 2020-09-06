// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Converts an amount to coins.				         			                 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 6, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const amountToCoins = (amount, coins) => {
	if (amount === 0) {
		return [];
	} else if (coins.length === 0) {
		return [amount];
	} else {

		const results = [];
		const lowestVal = [...coins].sort((a, b) => a - b)[0];

		while (amount >= lowestVal) {
			if (amount >= coins[0]) {
				amount -= coins[0];
				results.push(coins[0]);
			} else if (amount >= coins[1]) {
				amount -= coins[1];
				results.push(coins[1]);
			} else if (amount >= coins[2]) {
				amount -= coins[2];
				results.push(coins[2]);
			} else if (amount >= coins[3]) {
				amount -= coins[3];
				results.push(coins[3]);
			} else if (amount >= coins[4]) {
				amount -= coins[4];
				results.push(coins[4]);
			}
		}
		return results;
	}
}

(function () {

	console.log(amountToCoins(46, [25, 10, 5, 2, 1]));

})();