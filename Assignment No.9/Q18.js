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
