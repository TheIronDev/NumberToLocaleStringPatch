(function(){
	var tempNumber = 1000;
	// toLocaleString *should* return different strings based on different locales
	if(	tempNumber.toLocaleString('en') !== '1,000' ||
		tempNumber.toLocaleString('fr') !== '1 000') {
			window.Number.prototype.toLocaleString = function(){
				var locale,
					navigatorLanguage;

				navigatorLanguage = (navigator && navigator.language) || 'en';									
				locale = arguments[0] || navigatorLanguage;

				// TODO: Case/switch locales.

				return '1 000 ['+locale+']';
			};
	}
})(); // Imediately Invoke
