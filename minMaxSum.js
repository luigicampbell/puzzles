// const arr = [-1, 2, -3, 0, 5];
// const arr = [0,-1, 2, -5, 6];
// const arr = [1, 2, 3, 4, 5];
const arr = [-2, -1, 0, 3, 4]
function miniMaxSum(arr) {
    /*
     * Write your code here.
     */
    let minSum = 0;
    let maxSum = 0;

    for(let i = 0; i < arr.length-1; i++){
        minSum += arr[i];
        console.log(minSum);
        minSum = parseInt(minSum);
    }

    for(let j = 1; j < arr.length; j++){
        maxSum += arr[j];
        console.log(maxSum);
        maxSum = parseInt(maxSum);
    }
    console.log(`${minSum} ${maxSum}`);
    // return [minSum, maxSum];
}


miniMaxSum(arr);

let arr2 = [1,3,4,5,0];

let blah = arr2.sort();

console.log(blah);
