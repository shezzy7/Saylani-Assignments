                   // Task 4: Object Iteration
// Iterate over the properties of an object and print their values.
// Iterate over the properties of an object and perform a specific action for each property.
//lets create a object that stores popuation of some counntries in millions.
const population = {
    pak : 30,
    china : 150,
    ind : 100,
    USA : 50
};
//lets copy all the keys of this object in an array
let keys = Object.keys(population);//this method returns all the keys of object in the form of an array.so we can iterate on the object using this keys array
for(let i=0;i<keys.length;i++){
    console.log("Key ->",keys[i]," Value -> ",population[keys[i]]);
}
//now lets perform some operation on each proprty of this object.Lets increase each counntries population by 5
for(let i=0;i<keys.length;i++){
    population[keys[i]]+=5;
}
//now lets print object values using Object.values(objname); method
console.log(Object.values(population));//here we will see that population of each country has been inncreased by 5

