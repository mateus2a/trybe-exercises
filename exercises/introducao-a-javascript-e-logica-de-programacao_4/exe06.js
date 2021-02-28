/**
 * Para este bloce de função me baseei no código da Sonya Moisset, segue o link do
 * site: https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/
 */

function isPalindrome(string) {
  var re = /[\W_]/g;
  var lowRegString = string.toLowerCase().replace(re, '');
  var reversestring = lowRegString.split('').reverse().join(''); 
  return reversestring === lowRegString;

}


console.log(isPalindrome('ac'));
