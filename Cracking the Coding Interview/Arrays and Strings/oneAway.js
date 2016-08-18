/*
* There are 3 types of edits that can be performed in a string: remove, replace or add a character.
* Make a function that given 2 strings return if they are less then 1 edit away
*/

function oneAway(str1, str2){
    if( Math.abs(str1.length-str2.length) > 1 )
        return false;

    var s1, s2, index1 = 0, index2 = 0, diff = 0;
    if( str1.length > str2.length ){
        s1 = str1;
        s2 = str2;
    }else{
        s1 = str2;
        s2 = str1;
    }

    while( index1 < s1.length && index2 < s2.length ){// Runtime n
        if(s1.charAt(index1) != s2.charAt(index2)){
            diff++;

            if( diff > 1 )
                return false;

            if( s1.length == s2.length )
                index2++;

        }else{
            index2++;
        }

        index1++;
    }

    return true

}

//O(n) n-> shortest length of str
