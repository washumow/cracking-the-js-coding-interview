/*
* Given 2 strings, write a method to decide if one os a permutation of the other
*/

function isPermutation(str1,str2){
    if(str1.length != str2.length){
        return false;
    }

    var i, chars1 = {}, chars2 = {}, length = str1.length, keys;
    for(i = 0; i < length; i++){ //Runtime n
        countChar(str1,chars1,i);
        countChar(str2,chars2,i);
    }

    keys = Object.keys(chars1) //Runtime n
    for(i = 0; i < keys.length; i++){ //Runtime n
        if(!chars2.hasOwnProperty(keys[i]) || chars1[keys[i]] != chars2[keys[i]]){
            return false;
        }
    }

    return true;
}

function countChar(str,chars,index){ //Runtime constant
    if(chars.hasOwnProperty(str.charAt(index))){
        chars[str.charAt(index)]++;
    }else{
        chars[str.charAt(index)] = 1;
    }
}

//O(n) n = number of characters in str1 or str2 because they should be the same
