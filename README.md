Cross Browser Update to Number.toLocaleString
=====

Most modern browsers handle Number.toLocaleString correctly. If you specify a locale, the number should be formatted accordingly.

My basic example:

	var number = 1000;
	number.toLocaleString(); // Because my system defaults to English, it will result with "1,000"
	number.toLocaleString('en'); // Same thing here, I am just specifying English.

	// Here is where things get interesting.
	// Most modern browsers should return "1 000" (the correct french localization)
	// Some browsers (IE8 and below, Safari) appear to get
	// confused when localizing to other languages.	
	number.toLocaleString('fr');

So, in my little example, printing out a localized number for any locale besides 'en' provides inconsistent behavior. This small snipped aims at fixing this problem with the least intrusive way.	
