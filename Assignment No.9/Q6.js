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