                // Task 12: Object Privacy
    // Create private properties in an object using closures or symbols.

function personData(){
    let name = "Shezzy";
    let age = 21;
    return {
        setName : function(newName){
           name = newName;
        },
        getName : function(){
           console.log("Name : ",name);
        },
        setAge : function(newAge){
           age = newAge;
        },
        getAge : function (){
           console.log("Age : ",age);
        }
    };
}
    
let person = personData();
person.getName();
person.getAge();
person.setName("Goodo");
person.setAge(20);
person.getName();
person.getAge();
//so can access properties name and age through these functions and we can access them directly.
//like if we write
console.log(person.name);//this will error

    