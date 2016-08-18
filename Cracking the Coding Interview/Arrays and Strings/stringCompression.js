/*
* Implement a method to perform basic string compression using the counts of repeated characters. aabcccccaaa -> a2b1c5a3
*/

function stringCompression(str){
    if(str.length == 0)
        return str;

    var s, count = 1, chr;
    s = chr = str.charAt(0);
    for(var i = 1; i < str.length; i++){ //Runtime n
        if(str.charAt(i) == chr){
            count++;
        }else{
            s += count;
            chr = str.charAt(i);
            s += chr;
            count = 1;
        }
    }
    s += count;

    if( s.length < str.length )
        return s;
    return str;
}

//O(n) n-> length of the string
