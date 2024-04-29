                //JavaScript Assignment 3

const log = require("surge/lib/middleware/log");

// a) Return the length of a given string.
function returnLength(str){
    return (str.length);
}
console.log("Length of string 'Shahzad' is = ",returnLength("Shahzad"));

// b) Concatenate two strings together.
function concatinate(){
    let str1 = "Shahzad",str2=" Mustafai";
    let str3 = str1.concat(str2);
    console.log(str3);

}
concatinate();
// c) Determine if a given string is empty.
function isEmpty(){
    let str = " ";
    if(str.trim()){
        console.log("String is not empyty");
    }
    else{
        
        console.log("String is  empyty");
    }
}
isEmpty();
// d) Count the number of vowels in a string.
function countVowels(){
    let str = "Shahzad Hussain";
    let str2=str.toLowerCase();
    let count=0;
    for(let i=0;i<str2.length;i++){
        if(str2.charAt(i)=='a' || str2.charAt(i)=='e' || str2.charAt(i)=='i'|| str2.charAt(i)=='o'|| str2.charAt(i)=='u'){
            count++;
        }
    }
    console.log("Number of vowels in the the string '",str,"'  are = ",count);
}
countVowels();
// e) Reverse a given string.
function reverseString(){
    let str = "Malang";
    let reversedString = "";
    for(let i=str.length-1;i>=0;i--){
        reversedString=reversedString.concat(str.charAt(i));
    }
    console.log("Original String is = ",str);
    console.log("Reversed String is = ",reversedString);
}
reverseString();
// f) Check if a string is a palindrome.
function palindrome(){
    let str = "mom";
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)!=str.charAt(str.length-1-i)){
            console.log("String is not a Palindrome");
            return;
        }
    }
    console.log("String is a palindrome");
}
palindrome();
// g) Convert a string to uppercase.
function convertToUpper(){
    let str = "Muhammad Hussain";
    str=str.toUpperCase();
    console.log(str);
}
convertToUpper();
// h) Find the first occurrence of a given character in a string.
function firstOccurence(){
    let str = "Sakina Qadir";
    let char = 'a';
    console.log(char,"'s first occurence is at index ",str.indexOf(char));
}
firstOccurence();
// i) Replace all occurrences of a given character in a string with another character.
function replaceCharacters(){
    let str = "Decent Hostel";
    str = str.replace(new RegExp('e','g'),'a');
    // for(let i=0;i<str.length;i++){
    //     if(str.charAt(i)=="e"){
    //         str=str.replace("e","a");
    //     }
    // }
    console.log(str);
}
replaceCharacters();
// j) Trim leading and trailing whitespace from a string.
function trimSpaces(){
    let str = "   Fiza Akhtar  ";
    str = str.trim();
    console.log(str);
}
trimSpaces();
// k) Count the number of words in a string.
function countWords(){
    let str = "  s h u i o";
    let count=0;
    str=str.trim();
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)!=" "){
            count++;
        }
    }
    console.log("Number of words in given strin are = ",count);
}
countWords();

// l) Check if a string contains only numeric characters.
function numericString(){
    let str = "1536";
    for(let i=0;i<str.length;i++){
        if(str.charCodeAt(i)<48 || str.charCodeAt(i)>57){
            console.log("String contains values other then numeric");
            return;
        }
    }
    console.log("String contains only numeric values");
}
numericString();

// m) Check if a string is a valid email address.
function validemail(){
    let str = "jamshahzad72242@gmail.com";
    if(str.length<=10){
        console.log("Invaid email");
    }
    else{
        if(str.slice(-10)=="@gmail.com"){
            console.log("Valid email");
        }
        else{
            console.log("Invalid email");
        }
    }
}
validemail();
// n) Extract the domain name from a URL string.
// o) Convert a string into title case (the first letter of each word capitalized).
function 
// p) Remove all non-alphabetic characters from a string.

// q) Check if a string is a valid palindrome permutation (ignoring spaces).
// r) Check if a string is an anagram of another string.
// s) Find the longest word in a string.
// t) Perform string compression by replacing repeated characters with the character followed by the count.
