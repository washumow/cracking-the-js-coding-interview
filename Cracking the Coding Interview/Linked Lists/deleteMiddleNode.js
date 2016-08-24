/*
*   Implement an algorithm to delete a node in the middle (any but the first and last) given only that node
*/

function Node(value){
    this.value = value;
    this.next = null;
}

function deleteMiddleNode(middle){ //runtime constant
    if(middle.next == null){
        middle = null;
        return;
    }

    middle.value = middle.next.value;
    middle.next = middle.next.next;
}

//O(1)
