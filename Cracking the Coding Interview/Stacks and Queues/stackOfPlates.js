/*
*   Imagine a literal stack of plates, If the stacks gets too high, it might topple. Therefore, in real life
*   we would start a new stack.
*   Implement a data structucture, Set of stacks that creates a new stack once the previous one exceeds its
*   capacity.
*   FOLLOW UP implement popAt(index) wich performs a pop on an specific sub stack
*/

function Node(value){
    this.value = value;
    this.next = null;
}


function Stack(){
    this.node = null;
    this.items = 0;
}

Stack.prototype.pop = function(){
    if(!this.node)
        return null;
    var tmp = this.node;
    this.node = this.node.next;
    this.items--;
    return tmp;
}

Stack.prototype.push = function(value){
    var tmp = new Node(value);
    tmp.next = this.node;
    this.node = tmp;
    this.items++;
}

Stack.prototype.peek = function(){
    if(!this.node)
        return null;
    return this.node.value;
}

function SetOfStacks(maxItems){
    this.stacks = [];
    this.stacks.push(new Stack());
    this.maxItems = maxItems;
}

SetOfStacks.prototype.push = function(value){
    if(this.stacks[this.stacks.length-1].items >= this.maxItems ){
        this.stacks.push(new Stack());
    }
    this.stacks[this.stacks.length-1].push(value);
}

SetOfStacks.prototype.pop = function(){
    var tmp = this.stacks[this.stacks.length-1].pop();
    if(this.stacks[this.stacks.length-1].items == 0 && this.stacks.length > 1){
        this.stacks.pop();
    }
    if( tmp )
        return tmp.value;
    return null;
}

SetOfStacks.prototype.popAt = function(index){
    var tmp = null;
    if(index < this.stacks.length && index >= 0){
        tmp = this.stacks[index].pop();
        if(this.stacks[index].items == 0 ){
            if(index == this.stacks.length-1){
                this.stacks.pop();
            }else{
                this.stacks.splice(index,1);
            }
        }
    }
    if( tmp )
        return tmp.value;
    return null;
}

//All operations are O(1) except popAt() O(s) s-> number of stacks
