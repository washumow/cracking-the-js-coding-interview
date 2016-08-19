/*
*   Write a RECURSIVE function to test if a number is odd or even
*/

function recursiveEven(num){ //Runtime n/2
    if(num < 0)
        num = -num;
    if(num == 1)
        return false;
    if(num == 0)
        return true;

    return recursiveEven(num-2);
}

//O(n)
