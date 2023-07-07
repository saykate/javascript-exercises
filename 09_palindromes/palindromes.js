const palindromes = function (string) {
    let strippedStr = string.replaceAll('/\s\W/g', '');
    console.log(strippedStr);
let newStr = [...string.toLowerCase()];
console.log('Original', newStr);
let reverseStr = newStr.reverse();
console.log('Reverse', reverseStr);
};

// Do not edit below this line
module.exports = palindromes;
