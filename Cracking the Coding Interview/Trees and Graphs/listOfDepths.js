/*
* Gicven a binary tree design an algorithm wich creates a liked list of all the
* nodes of each depth
*/

function TreeNode(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function Node(value){
  this.value = value;
  this.next = null;
}

function LinkedList(){
  this.head = null;
  this.last = null;
}

LinkedList.prototype.add = function(value){ //O(1)
  if(!this.head){
    this.head = new Node(value);
    this.last = this.head;
  }else{
    this.last.next = new Node(value);
    this.last = this.last.next;
  }
}

function listOfDepths(tree){
  var list = {};

  addToListOfDepths(tree,0,list);
  return list;
}

function addToListOfDepths(node,depth,list){
  if( !node )
    return;
  if(!list.hasOwnProperty(depth)){
    list[depth] = new LinkedList();
  }

  list[depth].add(node);
  addToListOfDepths(node.left,depth+1,list);
  addToListOfDepths(node.right,depth+1,list);
}

//O(n) -> number of items in tree
