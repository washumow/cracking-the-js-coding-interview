/*
*  Write a loop that usign console.log N time output a N size triangle like the following
*  n = 3
*  #
*  ##
*  ###
*/

function loopingATriangle(n){
    var str;
    for(var i = 0; i < n; i++){ // Runtime n
        str = "";
        for(var j = 0; j <= i; j++){ //Runtime (n-1)/2
            str += "#";
        }
        console.log(str);
    }
}


//O(n)
