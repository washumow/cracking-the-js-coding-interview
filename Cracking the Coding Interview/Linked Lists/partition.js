/*
*   Write code that partition a linked list around value x, such as all the nodes less than x
*   are before the nodes that are greater or equal to x
*/

function Node(value){
    this.value = value;
    this.next = null;
}

function partition(list,x){
    var less = null, greater = null, llast = null, glast = null, tmp = list;
    while(tmp){ //runtime n
        if(tmp.value < x){
            if(!llast){
                less = tmp;
                llast = less;
            }else{
                llast.next = tmp;
                llast = tmp;
            }
        }else{
            if(!glast){
                greater = tmp;
                glast = greater;
            }else{
                glast.next = tmp;
                glast = tmp;
            }
        }
        tmp = tmp.next;
    }
    if(glast)
        glast.next = null;
    if(less){
        llast.next = greater;
        return less;
    }
    return greater

}

//O(n) n-> elements in list
