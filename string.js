// Write a program that takes a user's input and calculates the length of the input string using the length property.

function stringLength(str){
    return str.length;
}
const sentence = "I am a Web Developer";
const length = stringLength(sentence);
//console.log(length)


// Create a program that prompts the user for a string and an index. Then, use the charAt() method to display the character at that index.

function CharAtIndex(str,index){
    let indexNumber = str.charAt(index);
    return indexNumber;
}
let text = "I Love Programming";
let index = 7;
let result = CharAtIndex(text,index);
//console.log(result);


// Write a program that takes a string and two indices (start and end). Use the substring() method to extract and display the substring between the given indices.

function substring(str,start,end){
    let extractString = str.substring(start,end);
    return extractString;
}
let hobby = "I Love Programming and Coding";
let start = 7;
let end = 29;
let output = substring(hobby,start,end);
//console.log(output);


// Take a sentence as input and split it into words using the split() method. Count and display the number of words in the sentence.

function countAndDisplay(str){
    let display = str.split(" ").length;
    return display;
}
let input = "I Love Programming and I want to be a Developer.";
let display = countAndDisplay(input);
//console.log(display);


// Create a program that takes a sentence and allows the user to search for a word or phrase and replace it with another word or phrase using the replace() method.

function replaceWord(str){
    let replaced = str.replace("Designer" , "Developer");
    return replaced;
}
let words = "I am a Web Designer";
let newSentence = replaceWord(words);
//console.log(newSentence);


// Write a program that takes a string and a character as input. Use the indexOf() method to find and display the index of the first occurrence of that character in the string.

function indexOfCharacter(str,c){
    return str.indexOf(c);
}
let para = "I want to be Web Developer and I am learning JavaScript";
let indexNumber = indexOfCharacter(para,"r")
//console.log(indexNumber);


//Implement a program that reverses a given string using string manipulation methods.

function reverse(str){
    //it is solved by using buit-in method.
    // return str.split("").reverse().join("")


    // here solved by without built-in-method but using for of loop.
    // let reversed = "";
    // for(let char of str){
    //     reversed = char + reversed;
    //     console.log(reversed)
    // }
    
    //here another way to solve the problem
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}
let favourite = "JavaScript is Awesome";
//console.log(reverse(favourite));