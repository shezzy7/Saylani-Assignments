 // Task 3: Object Methods
// Create an object method that prints a message to the console.
// Create a method that calculates and returns a value based on object properties.
const obj4 = {
    display : function(){
        console.log("Will this journey ever end_Will this destination vever be see");
    }
};
obj4.display();//we can't use square bracket method to call methods inside an object
//now lets create an object with some properties like marks of math,chem etc and a method that calculates average of these properties and return average
const obj5 = {
    phy: 75,
    chem: 82,
    bio : 77,
    average : function(){
        let avg = (this.phy+this.chem+this.bio)/3;//this key is used when we want to point attributes of the the calling object.Like here average function can be called only by obj5 so this keyword specifies that phy that is present in obj5 
        return avg;
    }
};
console.log("Average markss -> ",obj5.average());

