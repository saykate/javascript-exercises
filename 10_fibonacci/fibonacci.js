const fibonacci = function(input) {
    if (input < 0) {
        return 'OOPS'
    } else {
        let previous = 0
        let current = 1 
        for (let i = 2; i <= input; i++) {
            let temp = current; 
            current += previous;
            previous = temp;
} return current
};
};

// Do not edit below this line
module.exports = fibonacci;
