var assert = require('chai').assert,
	sinon = require('sinon'),
	TestClass = require('../libs/test');

suite('test project', function() {
	setup(function() {
		this.sandbox = sinon.sandbox.create();
		this.clock = this.sandbox.useFakeTimers();
		this.testClass = new TestClass();
	});

	var testData11 = 'a,b,c',
		testData12 = '100,982,444,990,1',
		testData13 = 'Mark,Anthony,marka@lib.de',
		testData21 = '211,22,35\n10,20,33',
		testData22 = 'luxembourg,kennedy,44\nbudapest,expo ter,5-7\ngyors,fo utca,9';

	test('test request 1: one-line string input', function() {
		var array1 = this.testClass.strToArray(testData11),
			array2 = this.testClass.strToArray(testData12),
			array3 = this.testClass.strToArray(testData13);

		assert.isArray(array1);
		assert.isArray(array2);
		assert.isArray(array3);
	});

	test('test request 2: multi-line string input', function() {
		var obj1 = this.testClass.multiArray(testData21);
		assert.deepEqual(obj1, [['211','22','35'], ['10','20','33']]);
	});

	teardown(function() {
	});
});
