
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
longestWord();