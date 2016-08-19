/*
*  Write a program that uses console.log to print all the numbers from 1 to 100,
*  with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
*  and for numbers divisible by 5 (and not 3), print "Buzz" instead
*
* Follow up: print FizzBuzz in numbers divisible by both
*/

function fizzBuzz(){
    for(var i = 0; i < 100; i++){ //Runtime 100
        if( i % 3 == 0 ){
            console.log("Fizz");
        }else if( i % 5 == 0 ){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}

function fizzBuzzFizzBuzz(){
    for(var i = 0; i < 100; i++){ //Runtime 100
        if( i % 3 == 0 ){
            if( i % 5 == 0){
                console.log("FizzBuzz");
            }else{
                console.log("Fizz");
            }
        }else if( i % 5 == 0 ){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}


//O(1)
