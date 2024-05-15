              // Task 10: Object Property Enumeration
    // Use Object.keys() to get an array of all the property names of an object.
//We can get all the keys of an object using a built-in function which returns all the keys in the form of an array
//syntax-> Object.keys(objName);
const obj9 ={
    phy: 75,
    chem: 82,
    bio : 77,
    math : 85
};
//lets store all the keys in an variable
let allKeys = Object.keys(obj9);
//lets print it
console.log(allKeys)
