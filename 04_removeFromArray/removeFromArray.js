const removeFromArray = function() {
    let argues = Array.from(arguments);//it converts arguements into a array
    let arr = argues[0];//this select the array from which items to be removed
    let toBeRemoved = argues.slice(1,argues.length) //this makes an array of items to be removed
    let result = []// an empty array which will be retuer
    for(i=0;i<arr.length;i++){//this loops over items of array from which we have to remove selected items 
            if(!toBeRemoved.includes(arr[i])){ 
              result.push(arr[i]);
            }
        
        }return result;
};

// Do not edit below this line
module.exports = removeFromArray;
