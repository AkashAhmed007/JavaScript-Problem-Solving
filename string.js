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
console.log(display);