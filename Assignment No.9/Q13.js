
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
validemail();