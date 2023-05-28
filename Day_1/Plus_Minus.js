//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
//Print the decimal value of each fraction on a new line with 6 places after the decimal.

//Example arr = [1,1,0,-1,-1]
//There are n = 5 elements, two positive, two negative and one zero. 
//Their ratios are 2/5, 2/5 and 1/5. 
//Results are printed as(in New line): 0.400000 0.400000 0.200000

function plusMinus(arr) {
    // Write your code here
        var n = arr.length;
        var posIntCount = 0,negIntCount=0,zeroCount = 0;
        var propPositive,propNegative,propZero;
        for(let i=0;i<n;i++){
            let intValue = arr[i];
            if(intValue < 0){
                negIntCount++;
            }
            else if(intValue > 0){
                posIntCount++;
            }
            else{
                zeroCount++;
            }
        }
        propPositive = posIntCount/n;
        propNegative = negIntCount/n;
        propZero = zeroCount/n;
        console.log(propPositive);
        console.log(propNegative);
        console.log(propZero);  
    }

plusMinus([1,1,0,-1,-1]);
plusMinus([2,4,6,0,-1,-2,3]);