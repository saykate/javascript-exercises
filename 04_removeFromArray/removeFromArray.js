const removeFromArray = function(arr, ...check) {
    let newArr = arr.filter((value) => {
        return !check.includes(value)
    })
   return newArr

//    let newArr = []; 
//         for (let i = 0; i < arr.length; i++) {
//            if (!check.includes(arr[i])) {
//             newArr.push(arr[i])
//            }
//         };
       
//    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
