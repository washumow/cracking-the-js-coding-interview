/*
* Write a function that returns it's smallest argument
*
* Follow up return the min argument of a function with n possible arguments (Not included in book just for the LOLs)
*/

function minOf2(a,b){ //Runtime 1
    if(a < b)
        return a;
    return b;
}
//O(1)

function min(){ //Runtime n
    return Math.min.apply(null,arguments);
}
//O(n) n-> num of args
