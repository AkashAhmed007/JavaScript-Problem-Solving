// find the max number from an array

let heights = [60,62,52,75,68,80,50,90,100,45];
function getMax(numbers){
    let max = numbers[0];
    for(let num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}
let tallest = getMax(heights);
console.log("tallest number is: ", tallest)