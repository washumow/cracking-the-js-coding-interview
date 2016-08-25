/*
* Design a stack wich in addition to push and pop, has an min method and all operates at O(1)
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
    return tmp;
}

Stack.prototype.push = function(value){
    var tmp = new Node(value);
    tmp.next = this.node;
    this.node = tmp;
}

Stack.prototype.peek = function(){
    if(!this.node)
        return null;
    return this.node.value;
}


function StackWithMin(){
    var that = new  Stack();
    that.minStack = new Stack();

    that.push = function(value){
        Stack.prototype.push.apply(this,arguments);
        if( !that.minStack.peek() || that.minStack.peek() > value ){
            that.minStack.push(value);
        }
    }

    that.pop = function(){
        var tmp = Stack.prototype.pop.apply(this);
        console.log(tmp);
        if( tmp.value == that.minStack.peek()){
            that.minStack.pop();
        }
        return tmp;
    }

    that.min = function(){
        return that.minStack.peek();
    }
    return that;
}

StackWithMin.prototype.push = function(value){
    Stack.prototype.push.apply(this,arguments);
    if( !this.minStack.peek() || this.minStack.peek() > value ){
        minStack.push(value);
    }
    return tmp;
}

//O(1) in push, pop and min
