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
numericString();