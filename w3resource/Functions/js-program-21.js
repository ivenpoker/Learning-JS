// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets all possible subset with a fixed length (for example 2) combinations in an #
// #					 array.																			 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 6, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const subset = (array, array_size) => {
	let result_set = [];
	let result;

	for(let x = 0; x < Math.pow(2, array.length); x++) {
		result = [];
		let i = array.length - 1;
		do {
			if( (x & (1 << i)) !== 0)
			{
				result.push(array[i]);
			}
		}  while(i--);

		if( result.length >= array_size)
		{
			result_set.push(result);
		}
	}

	return result_set;
}

(function () {

	console.log(subset([1, 2, 3], 2))

})();