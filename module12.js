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


        // For in is can be used to travers an array



        //   with Array the key(index) is always a tring and therefore 
        // using it to traverese the array is dicouraged 
        // since it can some items may not follow the order

        // USING for of

        // Examples

        function showArrayValues(arr){

            for(var value of arr){
                console.log(value)
            }
        }

        var arr =["One","Two","Three","Four"];

        console.log("The output of the ShowArrayValues using for of")
        showArrayValues(arr);