
                     // Task 2: Object Properties
// Access and print the values of properties from an object.
// Modify the value of a property in an object.
// Add a new property to an existing object.
const obj3 = {
    name : "Shezzy",
    age : 22,
    profession : "Student"
};
//Accessing and printing values using two methods
//using '.' method for accessing and printing name
// Syntax -> objName.keyName 
console.log("Name -> ",obj3.name);
//using [] method for accessing and printing other properties
//syntax -> objName["keyName"]
console.log("Age -> ",obj3["age"]);
console.log("Profession -> ",obj3.profession);
//Lets modify name to "Shahzad"
obj3.name = "Shahzad";
//now lets print name again
console.log("Name -> ",obj3.name);
//adding a new key value pair in it
obj3.Uni="GCUF";
//lets print complete object now to see al the changes together
console.log(obj3);