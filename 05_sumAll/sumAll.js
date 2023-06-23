const sumAll = function(x, y) {
    if (x < 0 || y < 0 || !Number.isInteger(x) || !Number.isInteger(y)) {
        return "ERROR"
    }
    let sum = 0;
    if (x > y) {
        [x, y] = [y, x]
    }
    for (let i = x; i <= y; i++) {
        sum += i; 
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
