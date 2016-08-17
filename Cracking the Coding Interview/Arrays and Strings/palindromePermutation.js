/*
*  Given a string write a function to check if it's a permutation of palindrome
*/

function palindromePermutation(str){
    var str = str.split(" ").join(""), i, length, maxOddChars, chars = {}, keys, oddCount = 0;
    maxOddChars = str.length % 2 == 0 ? 0 : 1;
    length = str.length;

    for( i = 0; i < length; i++){ //Runtime n
        if( !chars.hasOwnProperty(str.charAt(i)) ){
            chars[str.charAt(i)] = 1;
        }else{
            chars[str.charAt(i)]++;
        }
    }

    keys = Object.keys(chars); //Runtime n
    length = keys.length;
    for(i = 0; i < length; i++){ //Runtime n
        if(chars[keys[i]] % 2 != 0 )
            oddCount++;
        if( oddCount > maxOddChars )
            return false;
    }

    return true;

}

//O(n) n number of characters in str
