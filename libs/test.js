/**
 * TestClass.
 *
 * @constructor
 */
var TestClass = function() {

};

/**
 * String to array converter
 *
 * @method strToArray
 * @param {string} testData
 *
 */
TestClass.prototype.strToArray = function(testData) {
	return testData.split(',');
};

/**
 * Multiarray converter
 *
 * @method multiArray
 * @param {string} testData
 *
 */
TestClass.prototype.multiArray = function(testData) {
	var multiArray = new Array(),
		doubleArray = new Array();
	multiArray = testData.split('\n');
	for (var i = 0; i < multiArray.length; i++) {
		doubleArray[i] = multiArray[i].split(',');
	}

	return doubleArray;
};

module.exports = TestClass;
