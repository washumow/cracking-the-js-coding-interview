/*
*   Write a program that sorts as stack such as the smallest items are on top.
*   You can use only stacks not other data structures and support:
*   push, pop, peek and isEmpty
*/

function Node(value){
    this.value = value;
    this.next = null;
}


function Stack(){
    this.node = null;
}

Stack.prototype.pop = function(){
    if(!this.node)
        return null;
    var tmp = this.node;
    this.node = this.node.next;
    return tmp.value;
}

Stack.prototype.push = function(value){

    function helperPush(value){ //unordered push
        var tmp = new Node(value);
        tmp.next = this.node;
        this.node = tmp;
    }

    var tmp = new Stack();
    while(this.peek() && value > this.peek()){
        helperPush.call(tmp,this.pop());
    }
    helperPush.call(this,value);
    while(!tmp.isEmpty()){
        helperPush.call(this,tmp.pop());
    }

}

Stack.prototype.peek = function(){
    if(!this.node)
        return null;
    return this.node.value;
}

Stack.prototype.isEmpty = function(){
    if(!this.node)
        return true;
    return false;
}

//Everything is O(1) except for push that is O(n) n-> number of items in the stack
