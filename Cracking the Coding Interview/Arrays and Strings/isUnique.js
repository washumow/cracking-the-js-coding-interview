/*
    Implement an algorithm to determine if a String has all unique characters, What if you cannot use aditional data structures
*/


function isUnique(str){
    var hash = {}, length = str.length, i, tmp;
    for(i = 0; i < length; i++){ //Runtime n
        tmp = str.charAt(i);
        if(!hash.hasOwnProperty(tmp)){
            hash[tmp] = true;
        }else{
            return false;
        }
    }
    return true;
}

//O(n) n = number of chars in string;
