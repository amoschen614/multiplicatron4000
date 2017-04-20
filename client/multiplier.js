const multiply = function(factor1, factor2) {
	return factor1 * factor2;
};

const multiplyAll = function(factorArr) {
	var product = 1;
	for (var i = 0; i < factorArr.length; i++) {
		product *= factorArr[i];
	}
	return product;
}

module.exports = {
	multiply: multiply,
	multiplyAll: multiplyAll
};