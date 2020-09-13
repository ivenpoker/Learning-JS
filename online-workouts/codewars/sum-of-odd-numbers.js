// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Sum of odd numbers from specific index.                                        #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 10, 2020.                                                            #
// #                                                                                                    #
// ######################################################################################################

const rowSumOddNumbers = (num) => {
	if (num <= 1) {
		return 1;
	} else {
		// rebuild triangle up to th 'numTh' element
		let data = [[1]];
		for (let i = 2; i <= num; i++) {
			let temp = data[data.length-1]
			let lastOdd = temp[temp.length-1];

			const tempArray = []
			for (let j = 0; j < i; j++) {
				tempArray.push(lastOdd + 2);
				lastOdd += 2;
			}
			data = [...data, tempArray]
		}

		// Sum specific row data
		return data[num-1].reduce((acc, val) => acc + val, 0);
	}
}

(function () {

	console.log(rowSumOddNumbers(1))

})();