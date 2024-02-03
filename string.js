// Write a program that takes a user's input and calculates the length of the input string using the length property.

function stringLength(str){
    return str.length;
}

const sentence = "I am a Web Developer";
const length = stringLength(sentence);
console.log(length)