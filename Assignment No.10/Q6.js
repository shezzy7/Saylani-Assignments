                       // Task 6: Object Nesting
    // Create an object that contains another object as one of its properties.
    // Access and modify properties of a nested object.
    const nest = {
        nestedObj : {
            name : "Goodo",
            age : 20,
            marks : "Super",
            heart : "Pure"
        },
        color:"White"
    };
    //lets print the nested object
    console.log(nest.nestedObj);
    //lets print some properties of nested object
    console.log(nest.nestedObj.name);
    console.log(nest.nestedObj.heart);
    //lets modify marks from 'Super' to 'extraOrdinary'
    nest["nestedObj"]["marks"]="Extra Ordinary";
    console.log(nest);
    
    