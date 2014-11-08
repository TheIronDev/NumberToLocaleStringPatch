Cross Browser Update to Number.toLocaleString
=====

Most modern browsers handle Number.toLocaleString correctly. That is to say, if you specify a locale,
the number should be formatted accordingly.

## Example:
```javascript
var number = 1000;
number.toLocaleString(); // Because my system defaults to English, it will result with "1,000"
number.toLocaleString('en'); // Same thing here, I am just specifying English.

number.toLocaleString('fr'); // French is different, though.
// Here is where things get interesting.
// Most modern browsers should return "1 000" (the correct french localization)
// Some browsers (IE8 and below, Safari) appear to get confused when localizing to other languages.	
```
So, in my little example, printing out a localized number for any locale besides 'en' provides inconsistent behavior. This small snipped aims at fixing this problem with the least intrusive way.

## Usage
```javascript
1234..toLocaleString('de');
// returns: 1.234

(1234.25).toLocaleString('fr');
// returns: 1 234,25

var temp = 1234.25;

temp.toLocaleString('gb');
// returns: 1,234.25
```

## Testing:

Run: `grunt` or `grunt jasmine`

## License:
This shim is BSD licensed.  Hope this helps out! :turtle:	
