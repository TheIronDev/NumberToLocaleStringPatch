'use strict';

// Conveniently, phantomJS does not handle number.toLocaleString correctly,
// so this should be testing for the override.
describe("Number", function(){
	var number;

	beforeEach(function() {
		number = 1000;
		// TODO: Add an override in the event that phantomJS does properly handle en, fr, and de.
	});

	it("should produce '1,000' for English Locales", function() {		
		expect(number.toLocaleString('en')).toEqual("1,000");
	});
	it("should produce '1 000' for French Locales", function() {		
		expect(number.toLocaleString('fr')).toEqual("1 000");
	});
	it("should produce '1.000' for German Locales", function() {		
		expect(number.toLocaleString('de')).toEqual("1.000");
	});
	
});