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

function getMin(numbers){
    let min = numbers[0];
    for(let num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
// console.log("max number is: " , getMax(heights))
// console.log("min number is: " , getMin(heights))


