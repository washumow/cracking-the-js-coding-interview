/*
* Write a method to replace spaces for '%20' in a string
* Because this is easy in javascript we will use a character array
* Asumptions: Has enough space at the end to hold the exact number of chars
*/

function URLify(array){
    var helper = "02%", i, j, characterAppeared = false, currIndex = array.length-1;
    for( i = array.length-1; i >= 0; i-- ){//Runtime n
        if( array[i] != " " ){
            if( !characterAppeared )
                characterAppeared = true;
            array[currIndex--] = array[i];
        }else if( array[i] == " " && characterAppeared ){
            for(j = 0; j < 3; j++){ //Runtime constant
                array[currIndex--] = helper.charAt(j);
            }
        }
    }
    return array.join("");
}
