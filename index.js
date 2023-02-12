

/* the problem in my words:

in an array of numbers, if possible, find 2 numbers whose sum is the target and return their indexes.

example: [3, 6, 9, 5, 4], target is 11.
iterte through the array for each element.

then starting at the next element, iterate through the rest of the array to see if any numbers in the rest of the array equal the trget when added together.
*/


/* 
pseudo code:

-  iterate through the array with a loop starting at the index of 0
-  assign a constant to represent the complement  needed to reach the target. 
- iterate through the rest of the array starting at the index after the element we are currently on
- compare each element in the array to the complment constant 
- if complement is found, return index of element and it's complement


*/


function twoSum (array, target) {
   let indexes = [] 
   for (let i = 0; i<array.length; i++ ) {
        let complement = target - array[i]
        
        for(let j = 1; j<array.length; j++){
            if (complement === array[j]){
            indexes.push(i,j)
            return indexes
            }
        }   
    }
}




/*test cases*/ 

console.log("expected: 1, 3 =>")
console.log(twoSum([3,5,6,9,10], 14))


console.log("expected result: 1, 3 => ")
console.log(twoSum([20, 9, 3, 6], 15))


//edge cases
// console.log("Expected Result: ?? ")
// twoSum([3, 5, 4, 9], 9)



