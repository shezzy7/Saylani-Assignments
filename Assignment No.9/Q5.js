
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