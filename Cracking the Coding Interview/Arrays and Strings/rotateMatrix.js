/*
* Gicen an image represented by an NxN matrix, rotate it 90 degrees
*/

function rotateMatrix(values,n){
    var offset = 1, start = 0;
    for(var i = 0; i < n/2; i++){ // Runtime n/2
        for( var j = start; j < n - offset; j++){ //Runtime n/4
            var tmp = values[start][j];
            values[start][j] = values[n-offset-j+start][start];
            values[n-offset-j+start][start] = values[n-offset][n-offset-j+start];
            values[n-offset][n-offset-j+start] = values[j][n-offset];
            values[j][n-offset] = tmp;
        }
        start++;
        offset++;
    }
    return values+"";
}

//O(n^2) n-> length of one row of the matrix
