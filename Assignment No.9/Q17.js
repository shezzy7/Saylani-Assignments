
// q) Check if a string is a valid palindrome permutation (ignoring spaces).
function validPalindromPermutation(){
    let str = "aabbbccc";
    let count = Array(52).fill(0);
    for(let i=0;i<str.length;i++){
        let code = str.charCodeAt(i);
        if(str.charAt(i)==' '){
            continue;
        }
        if(code>=97 && code<=122){
            code=(code-97)+26;

        }
        else if(code>=65 && code<=90){
            code=code-65;
        }
        count[code]++;
    }
    let counter = 0;
    for(let i=0;i<count.length;i++){
        if(count[i]%2==1){
            counter++;
        }
    }
    if(counter==1 || counter==0){
        console.log("Valid palindrom permutation");
    }
    else{
        console.log("Not Valid palindrom permutation");

    }

}
validPalindromPermutation();