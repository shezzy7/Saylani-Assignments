
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