//Given five positive integers, 
//Find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
//Then print the respective minimum and maximum values as a single line of two space-separated long integers.

//Example  arr = [1,3,5,7,9]
//The minimum sum is 1+3+5+7 = 16 and the maximum sum is 3+5+7+9 = 24. 
//The function prints => 16 24


function miniMaxSum(arr) {
    // Write your code here
    let sum = arr.reduce((a, b) => a + b);
    let maxVal = Math.max(...arr);
    let minVal = Math.min(...arr);
    console.log((sum - maxVal) + ' ' + (sum - minVal));
}

miniMaxSum([1,2,3,4,5]);
miniMaxSum([10,20,30,40,50]);
miniMaxSum([5,5,5,5,5]);
