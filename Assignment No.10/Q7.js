                // Task 7: Object Prototypes
    // Create a prototype object and use it to create multiple instances of objects.
    // Add a method to the prototype object and observe its effect on the instances.
//creating an empty prototype object
const Animal = {};
//lets a method in this object
Animal.eat=function(){
    console.log("Different Animals eats different food");
}
//creatinng some instances of the Animal object
// syntax -> let instanceName = Object.create(prototypeObjectName);
const Dog = Object.create(Animal);
//adding a method to prototype object
Animal.walk = function(){
    console.log("Animals walk legs");
}
Dog.eat();
Dog.walk();
Dog.bark = function(){
    console.log("Dogs barks in the night");
}
Dog.bark();
//lets create another instance
let cat = Object.create(Animal);
cat.walk();
//here we see that methods added in the prototype object can be seen in the instances of this prototype object.Even if we define them after or before creating an instance of the protope object.And different instances cannot  access method of each other

