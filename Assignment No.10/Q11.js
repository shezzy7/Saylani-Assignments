               // Task 11: Object Inheritance
    // Create a parent object and a child object that inherits properties and methods from the parent.
//we can make inheritance in object using prototypes in javascript.We create an object with some properties or method or we can create it empty and then create some other child objects which inherit the properties and methods of this parent object using a built-in function
//lets create a Parent object
const Parent = {
    name : "Hussain",
    age : 48
};
//lets creaate some child object which inherits the prioperties of this parent object
const child1 = Object.create(Parent);
//if we print child.name hten this will give 'Hussain'
console.log(child1.name);
//but we can modify this for this child1 
child1.name = "Jawad";
console.log(child1.name);//this will give output 'Jawad' and this will not make any changes for the parent object.For example now if we print name for parent then it will be 'Hussain'
console.log(Parent.name);
//this is how inheritance in objects works
