'use strict';

// Conveniently, phantomJS does not handle number.toLocaleString correctly,
// so this should be testing for the override.
describe("Number", function(){
	var number;

	beforeEach(function() {
		number = Math.PI*1000000;
		// TODO: Add an override in the event that phantomJS does properly handle en, fr, and de.
	});

	it("should produce '3,141,592.654' for English Locales", function() {		
		expect(number.toLocaleString('en')).toEqual("3,141,592.654");
	});
	it("should produce '3 141 592,654' for French Locales", function() {		
		expect(number.toLocaleString('fr')).toEqual("3 141 592,654");
	});
	it("should produce '3.141.592,654' for German Locales", function() {		
		expect(number.toLocaleString('de')).toEqual("3.141.592,654");
	});
	
});