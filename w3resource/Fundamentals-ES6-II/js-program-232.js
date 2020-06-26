// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Flattens an object with paths for keys.								   		 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 26, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################'

const flattenObjKeyPath = (obj = {}, prefix = '') => Object.keys(obj).reduce((acc, key) => {
	const pre = prefix.length ? prefix + "." : "";
	if (typeof obj[key] === "object") {
		Object.assign(acc, flattenObjKeyPath(obj[key], pre + key));
	} else {
		acc[pre + key] = obj[key];
	}
	return acc;
}, {});

(() => {

	console.log(flattenObjKeyPath({
		a: {
			b: {
				c: 1
			},
			e: {
				d: 1,
				v: 2,
				f: false
			}
		},
		d: 1
	}));

})();