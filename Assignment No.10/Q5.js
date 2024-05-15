                   // Task 5: Object Comparison
// Compare two objects to check if they have the same properties and values.
// Compare two objects to check if they refer to the same object in memory.
const comp1 ={
    phy: 75,
    chem: 82,
    bio : 77,
    math : 85
};
const comp2 = {
    phy: 75,
    chem: 82,
    bio : 77,
    math : 85
};
//first of all lets compare their length after storing their keys in some variable
let k1 = Object.keys(comp1);
let k2 = Object.keys(comp2);

//lets define a function for comparing these two objects
function compare(k1,k2,comp1,comp2){
    //if length of keys of both objects is differentt then they are not equall
    if(k1.length!=k2.length){
        return false;
    }
    
    for(let i=0;i<k1.length;i++){
        if(k1[i]!=k2[i]){//if any key name is different then they are unequall
            return false;
        }
        if(comp1[k1[i]]!=comp2[k2[i]]){//if any keys value is not same then they are also unequall
            return false;
        }
    }
    //if any of conditions above does not run the it means that they are equall so we will return true. 
    return true;
}
let comp = compare(k1,k2,comp1,comp2);

if(comp){
    console.log("Equall");
}
else{
    console.log("Not equal");
}
//Lets check if two objects referring to same object in memory
let comp3 = comp2;//Here this comp3 is point to this comp2 in memory.It means that this not occupy any additional space in the memory.
console.log(comp3==comp2);//This will give true.                        
// But we if we compare comp3 and comp1 then they will give false answer even they contains same value but they point to different memory location
console.log(comp1==comp3);//false

