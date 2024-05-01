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
removeNonAlpha();
