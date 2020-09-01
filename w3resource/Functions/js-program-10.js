// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates an N by M matrix, which is an identity matrix.                          #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 1, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const createIdentityNByM_matrix = (n, m) =>
	Array(n).fill(0).map((_) => Array(m).fill(0)).map((row, idx) => {
		row[idx] = 1;
		return row;
	});

(function () {

	const matrix = createIdentityNByM_matrix(3, 3);
	console.log(matrix);

})();
