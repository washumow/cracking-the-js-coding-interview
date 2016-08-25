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


function Queue(){
    this.in = new Stack();
    this.out = new Stack();
}

Queue.prototype.enqueue = function(value){
    this.in.push(value);
}

Queue.prototype.peek = function(){
    while(this.in.peek()){
        var tmp = this.in.pop();
        this.out.push(tmp.value);
    }
    var x = this.out.peek();
    while(this.out.peek()){
        var tmp = this.out.pop();
        this.in.push(tmp.value);
    }
    return x;
}

Queue.prototype.dequeue = function(){
    while(this.in.peek()){
        var tmp = this.in.pop();
        this.out.push(tmp.value);
    }
    var x = this.out.pop();
    while(this.out.peek()){
        var tmp = this.out.pop();
        this.in.push(tmp.value);
    }
    return x;
}
