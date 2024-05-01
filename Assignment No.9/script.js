                //JavaScript Assignment 3


// a) Return the length of a given string.
function returnLength(str){
    return (str.length);
}
// console.log("Length of string 'Shahzad' is = ",returnLength("Shahzad"));

            // b) Concatenate two strings together.
            function concatinate(){
                let str1 = "Shahzad",str2=" Mustafai";
                let str3 = str1.concat(str2);
                console.log(str3);

            }
            // concatinate();


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
// isEmpty();


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
// reverseString();


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
                // palindrome();


// g) Convert a string to uppercase.
function convertToUpper(){
    let str = "Muhammad Hussain";
    str=str.toUpperCase();
    console.log(str);
}
// convertToUpper();


            // h) Find the first occurrence of a given character in a string.
            function firstOccurence(){
                let str = "Sakina Qadir";
                let char = 'a';
                console.log(char,"'s first occurence is at index ",str.indexOf(char));
            }
            // firstOccurence();


// i) Replace all occurrences of a given character in a string with another character.
function replaceCharacters(){
    let str = "Decent Hostel";
    //replacing 'e' with 'a' here
    // str = str.replace(new RegExp('e','g'),'a');
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)=="e"){
            str=str.replace("e","a");
        }
    }
    console.log(str);
}
// replaceCharacters();


                // j) Trim leading and trailing whitespace from a string.
                function trimSpaces(){
                    let str = "   Fiza Akhtar  ";
                    str = str.trim();
                    console.log(str);
                }
                // trimSpaces();


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
// countWords();


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
        // numericString();


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
// validemail();


        // n) Extract the domain name from a URL string.
            function getDomain(){
                let url = "www.google.com";
                let counter=0;
                let domain="";
                for(let i=url.length-1;i>=0;i--){
                    if(url.charAt(i)=="."){
                        counter++;
                        if(counter==2){
                            for(let j=i+1;j<url.length;j++){
                                domain+=url.charAt(j);
                            }
                            break;
                        }
                    }
                }
                console.log(domain);
            }
            getDomain();

// o) Convert a string into title case (the first letter of each word capitalized).
function littleCase(){
    let str = "    if You have    knowledge, make others to light their candles in it  ";
    let str2 = "";
    if(str.charAt(0)!=' '){
        str2=str2.concat(str.charAt(i).toUpperCase());
    }
    
    for(let i=0;i<str.length;i++){
        let space=false;
        if(str.charAt(i)===' '){
            space = true;
            str2=str2.concat(str.charAt(i));
        }
        else{
            str2=str2.concat(str.charAt(i));
        }
        if(space){
            if(str.charAt(i+1)!=' ' && i<str.length-1){
                i++;
                str2=str2.concat(str.charAt(i).toUpperCase());
            }

        }
    }
    console.log(str2);
}
littleCase();


            // p) Remove all non-alphabetic characters from a string.
            function removeNonAlpha(){
                let str = "shahzad 722 -/ hussain";
                for(let i=0;i<str.length;i++){
                    if(!(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90 ) && !(str.charCodeAt(i)>=92 && str.charCodeAt(i)<=122 )){
                        str=str.replace(str.charAt(i),"");
                        i--;
                    }
                }
                console.log(str);
            }
            // removeNonAlpha();


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
// validPalindromPermutation();


        // r) Check if a string is an anagram of another string.
        function anagram(){
            let str = "listen j",str2="silent j";
            let arr1 = Array(26).fill(0);
            let arr2 = Array(26).fill(0);
            let n=str.length;
            let m=str2.length;
            if(n!=m){
                return "not anagram";
            }
            for(let i=0;i<n;i++){
                arr1[str.charCodeAt(i)-92]++;
            }
            for(let i=0;i<m;i++){
                arr2[str2.charCodeAt(i)-92]++;
            }
            for(let i=0;i<26;i++){
                if(arr1[i]!=arr2[i]){
                    return "not anagram";
                }
            }
            return " anagram";

        }
        console.log(anagram());

// s) Find the longest word in a string.
function longestWord(){
    let str = "Success is not final, failure is not fatal: It is the courage to continue that counts.";
    let longWord = "";
    for(let i=0;i<str.length;i++){
        let currLetter = str.charAt(i);
        if(currLetter!=' '){
            let j=i;
            let currentWord = 1;
            while(str.charAt(i+1)!=' ' && i<str.length-1){
                currentWord++;
                i++;
            }
            if(currentWord>longWord.length){
                longWord=str.slice(j,i+1);
            }
        }
    }
    console.log(longWord);
}
// longestWord();


        // t) Perform string compression by replacing repeated characters with the character followed by the count.
        function compressString(){
            let str1 = "kashiiiiii";
            let res="";
            for(let i=0;i<str1.length;i++){
                let curr = str1.charAt(i);
                let count=1;
                while(curr==str1.charAt(i+1) && i<str1.length-1){
                    count++;
                    i++;
                }
                res+=curr;
                if(count>1){
                    res+=count;
                }

            }
            console.log(res);
        }
        // compressString();