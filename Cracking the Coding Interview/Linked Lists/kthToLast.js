/*
* Implement an algorithm to find the kth to last element of a singly linked list
* Assuptions: k > 0
*/

function Node(value){
    this.value = value;
    this.next = null;
}

function kthToLast(list,k){
    var diff = 1, tmp, kth;
    if(!list || !list.next)
        return null;

    kth = list;
    tmp = list.next;
    while(tmp.next){ //Runtime n
        tmp = tmp.next;
        diff++;
        if( diff > k ){
            kth = kth.next;
            diff--;
        }
    }
    if(diff < k)
        return null;
    return kth;
}

//O(n)
