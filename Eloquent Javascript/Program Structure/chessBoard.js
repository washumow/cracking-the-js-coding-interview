/*
* Write a program that creates a string that represents an nxn grid, using newline characters to separate lines.
* At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
*/

function chessBoard(n){
    var offset, str = "";
    for( var i = 0; i < n; i++){ //Runtime n
        offset = i % 2 == 0 ? 1 : 0;
        for(var j = 0; j < n; j++){ //Runtime n
            if( (j+offset) % 2 == 0 ){
                str += "#"
            }else{
                str += " ";
            }
        }
        str += "\n";
    }
    return str;
}

//O(n^2) 
