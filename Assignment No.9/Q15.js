
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