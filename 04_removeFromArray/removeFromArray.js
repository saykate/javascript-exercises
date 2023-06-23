const removeFromArray = function(arr, ...check) {
   let newArr = []; 
        for (let i = 0; i < check.length; i++)
       {arr.forEach(value => {
         if (value !== check[i]) {
             newArr.push(value)
         }
        });
    }
   console.log(check)
   return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
