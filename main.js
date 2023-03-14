const arr = [1, 3, 5, 7, 9];
let minNumber = arr[0];
let maxNumber = arr[0];
let minSum = 0;
let maxSum = 0;
 
function minMax(arr){
    const length = arr.length;
    for(let i = 0; i<length; i++){
        if(arr[i] >= maxNumber){
            maxNumber = arr[i];
        }
        if(arr[i] <= minNumber){
            minNumber  = arr[i];
        }
    }
    for(let i = 0; i < length; i++){
        if(arr[i] > minNumber){
            maxSum += arr[i]; 
        }
        if(arr[i] < maxNumber){
            minSum += arr[i];
        }
    }
    return console.log(minSum + " " + maxSum)
}
minMax(arr);

