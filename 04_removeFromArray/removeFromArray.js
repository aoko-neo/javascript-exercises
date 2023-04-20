const removeFromArray = function(array, ...value) {
     let array2 = [];
     for (let i = 0; i < array.length; i++) {
          if (array[i] !==value) {
               array2.push(array[i])
          }
     }
     return array2;
};

// Do not edit below this line
module.exports = removeFromArray;
