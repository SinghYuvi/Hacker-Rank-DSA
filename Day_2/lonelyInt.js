//Given an array of integers, where all elements but one occur twice, find the unique element.
//Ex- a = [1,2,3,4,3,2,1], The unique element is 4.

function lonelyinteger(a) {
    // Write your code here
    let sorted = a.sort();
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i - 1] !== sorted[i] && sorted[i + 1] !== sorted[i]) {
        return sorted[i];
      }
    }
}