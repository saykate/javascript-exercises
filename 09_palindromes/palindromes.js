const palindromes = function (string) {
    let strippedStr = string.toLowerCase().replaceAll(/\W/g, '');
    let strippedArr = [...strippedStr];
    let reverseStr = strippedArr.reverse().join('');
    console.log('arr', strippedArr)
    console.log('stripped', strippedStr);
    console.log('rev', reverseStr);

      return strippedStr === reverseStr
};

// Do not edit below this line
module.exports = palindromes;
