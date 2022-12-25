// create an object

var obj={
    item1:"This",
    item2:"is",
    item3:"an",
    item4:"example"
};


// creating a for in loop

function showObjectKeys(obj){

    for(var key in obj){
        console.log(key)
    }
};

function showObjectValues(obj){

    for(var key in obj){

        console.log(obj[key]);
    }

}

console.log("Keys of Ob:");

showObjectKeys(obj);
    // Output
            // Keys of Ob:
            // item1
            // item2
            // item3
            // item4

console.log("Values of Ob:");
showObjectValues(obj);

    // Output
        // Values of Ob:
        // This
        // is
        // an
        // example


        // For in is can be used to travers an object



        // using for in in an array


        var arr=["One","Two","Three","Four"];


        showObjectKeys(arr)
        showObjectValues(arr);