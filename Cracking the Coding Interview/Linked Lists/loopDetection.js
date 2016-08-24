/*
*   Given a circular linked list implements an algoritmn that returns the note at the beggining of the loop
*/
function Node(value){
    this.value = value;
    this.next = null;
}

function intersects(list){
    var arr = [], tmp = list;
    while(tmp){//Runtime n
        if(arr.indexOf(tmp) != -1){// Runtime n
            return tmp;
        }
        arr.push(tmp);
        tmp = tmp.next;
    }
    return null;
}

//O(n^2) n-> items in list
