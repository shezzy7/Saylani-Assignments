                    // Task 8: Object Serialization
    // Convert an object to a JSON string using JSON.stringify().
    // Parse a JSON string and convert it back to an object using JSON.parse().
//lets create an object
const obj7 ={
    phy: 75,
    chem: 82,
    bio : 77,
    math : 85
};
//lets convert this object to JSON string using JSON.stringify()
let jsonString = JSON.stringify(obj7);
console.log("JSON string -> ",jsonString);
//lets create a JSON String and convert it to object using JSON.parse();
let jsonStr2 = '{"name": "John", "age": 30, "city": "New York"}';
console.log(jsonStr2);
let obj8 = JSON.parse(jsonStr2);
console.log(obj8);


