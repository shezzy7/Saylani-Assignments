

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
compressString();