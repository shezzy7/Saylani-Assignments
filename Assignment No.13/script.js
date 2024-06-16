let outPut = document.getElementById("screen");
function display(num){
    outPut.value += num;
}
function Calc(){
    try{

        outPut.value = eval(outPut.value);
    }
    catch(err){
        alert("Invalid");
    }
}
function Clear(){
    outPut.value = "";
}
function Del(){
    outPut.value = outPut.value.slice(0,-1);
}