
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
replaceCharacters();