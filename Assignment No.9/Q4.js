
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
// countVowels();