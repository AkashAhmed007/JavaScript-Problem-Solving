function calculateMoney(ticketSale){
    const ticketPrice = 120;
    const totalStuff = 8;
    const janitorCost = 500;
    const lunchCost = 50;
    let profit = 0;
    if(ticketSale < 0){
        return "Invalid Number";
    }
    profit = (ticketSale * ticketPrice) - (janitorCost + (totalStuff * lunchCost));
    return profit;
}
// console.log(calculateMoney(1));
// console.log(calculateMoney(1055));
// console.log(calculateMoney(93));
// console.log(calculateMoney(-130));


function checkName(name){
        if(typeof name !== 'string'){
            return "Invalid";
        } 
        const smallLetterName = name.toLowerCase();
        const lastLetter = smallLetterName.charAt(smallLetterName.length - 1);
        const lettersAtEnd = ['a','e','i','o','u','y','w'];
        if(lettersAtEnd.includes(lastLetter)){
            return "Good Name";
        }
        return "Bad Name";      
}

//  console.log(checkName("Salman"))
//  console.log(checkName("RAFEE"))
//  console.log(checkName("Jhankar"))
//  console.log(checkName(199))
//  console.log(checkName(["Rashed"]))



function deleteInvalids(array){
    if(!Array.isArray(array)){
        return "Invalid Array";
    }
    let newArr = [];
    for(let index of array){
        if(typeof index === "number" && !isNaN(index)){
             newArr.push(index);
        }
    }
    return newArr; 
}

// console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]))
// console.log(deleteInvalids(["1" , {num:2} , NaN ]))
// console.log(deleteInvalids([ 1 , 2 , -3 ]))
// console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}))



function password(obj){
    if(typeof obj !== 'object' && obj !== null){
        return 'invalid';
    }
    else if(Object.keys(obj).length < 3 || obj.birthYear.toString().length < 4){
        return "Invalid";
    }
    return `${obj.siteName}#${obj.name}@${obj.birthYear}`;
}

// console.log(password ({ name: "kolimuddin" , birthYear : 1995, siteName: "google"}))
// console.log(password ({ name: "rahat" , birthYear: 2002, siteName: "Facebook" }))
// console.log(password ({ name: "rahat" , birthYear: 200, siteName: "Facebook" }))
// console.log(password ({ name: "maisha" , birthYear: 2002 }))




function monthlySavings(arr,livingCost) {
    if(!Array.isArray(arr) && (typeof livingCost) !== 'number'){
        return 'invalid input';
    }
    let totalEarnings = 0;
    let savings = 0;
    let tax = 0;
        for(let element of arr){
            totalEarnings += element;
            if(element >= 3000){
                 tax += (element * 20) / 100;   
            }  
        }
        savings = totalEarnings - (livingCost + tax); 
        if(savings < 0){
            return "Earn More"
        }
        return savings; 
    }
    // console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400))
    // console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000))
    // console.log(monthlySavings([ 900 , 2700 , 3400] , 10000))
    // console.log(monthlySavings(100, [ 900 , 2700 , 3400]))