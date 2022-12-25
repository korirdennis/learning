// create a while loop to count numbers from 1-100

function countTo100(){

    // initialize the two variables
    var sum=0, num=1;


    while(num<100){

        sum+=num;

        num+=1
    }
    return sum;
};



// use do while loop

function count_to_100(){
    // initialize the two variables

    var sum =0, num=1;

    do{
        sum+=num;
        num++;
    }while(num<100);

    return sum;
};

//console.log(count_to_100());

// Creating a for loop to count numbers from 1-100
function count100(){

    for(var sum=0,num=1; num<100; num++){

        sum+=num;
    }
    return sum;
}

//console.log(`The sum is ${count100()}`); // expected output is "The sum is 4950"


// loop through an arry using for loop

var family =["Dennis","Sharon","Tiffany"];

    for(i=0; i<=family.length;i++){

        console.log(family[i]);
    }


    // Expected output
    // Dennis
    // Sharon
    // Tiffany


