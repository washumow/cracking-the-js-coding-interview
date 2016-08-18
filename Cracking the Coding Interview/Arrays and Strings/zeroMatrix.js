/*
* Write an algorithm such that if an element in an MxN matrix is 0 the entire row and column are set to 0
*/

function zeroMatrix(mtx,m,n){
    var rows = initializeArray(m), cols = initializeArray(n);
    for(var i = 0; i < m; i++){ //Runtime n*m
        for(var j = 0; j < n; j++){
            if(mtx[i][j] == 0 ){
                rows[i] = true;
                cols[j] = true;
            }
        }
    }

    for(var i = 0; i < m; i++){ //Runtime n*m
        for(var j = 0; j < n; j++){
            if( rows[i] || cols[j] ){
                mtx[i][j] = 0;
            }
        }
    }
    return mtx;
}

function initializeArray(n){
    var a = [];
    for(var i = 0; i < n; i++){
        a.push(false);
    }
    return a;
}

//O( n*m );
