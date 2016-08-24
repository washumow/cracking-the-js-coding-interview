/*
*   Write code that determines if 2 lists intersects (by reference not value)
*/
function Node(value){
    this.value = value;
    this.next = null;
}

function intersects(list1, list2){
    var arr = [], tmp = list1;
    while(tmp){ // Runtime n
        arr.push(tmp);
        tmp = tmp.next;
    }
    tmp = list2;
    while(tmp){//Runtime m
        if(arr.indexOf(tmp) != -1){//Runtime n
            return tmp;
        }
        tmp = tmp.next;
    }
    return null;
}


//O(n*m) n-> elements in list1 m-> elements in list2
