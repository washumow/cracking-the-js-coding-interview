/*
* Assume you have a method isSubstring, Given 2 strings write a code that checks if s1 is a rotation of s2 with only one call to isSubstring
*/

function isSubstring(str,substr){ //Runtime a*b a-> length of str b-> length of substr
    if( str.indexOf(substr) != -1)
        return true;
    return false;
}

function isStringRotation(str1,str2){
    if(str1.length != str2.length || str1.length == 0)
        return false;

    str1 = str1.split(""); //Runtime n
    var s = str1.splice(0,1); //Runtime n
    s = str1.join("") + s;//Runtime n
    s = s+s;
    return isSubstring(s,str2);//Runtime (2*n)*n because they should be the same length
}

//O(n^2) n-> length pf the string
