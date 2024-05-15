              // Task 9: Object Destructuring
    // Use object destructuring to extract specific properties from an object.
//Basically in object destructuring we store keys of an objects in some vaiable and then access those keys from objects using these vaiables

const obj6 = {
    name : "Hania",
    age : 3,
    height : 2.5
};
//lets do object destructuring
//syntax -> let {var1,var2...} = objName;
//variable name should be same as name of key
let {name,height}=obj6;
console.log("Name -> ",name);
//but we can also change variable name by using following method
let {name:personName,age:personAge} = obj6;
console.log("Name -> ",personName," , Age -> ",personAge);

