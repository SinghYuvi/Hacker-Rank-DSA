// Need to complete the given function findMedian where we need to find the median of the given unsorted Array.
// For Example arr = [1,2,3,4,5] or [0,1,2,4,5,6,3]

function findMedian(arr){
    // Your code goes here.
    const mid = Math.floor(arr.length / 2);
    const nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  }
