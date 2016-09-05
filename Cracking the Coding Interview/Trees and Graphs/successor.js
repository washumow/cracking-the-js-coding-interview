/*
* Given a node find the next node(in order).Asume each node has a link to its parent
*/

function Node(value,parent){
  this.value = value;
  this.parent = parent;
  this.right = null;
  this.left = null;
}

function successor(node){
  if(node.right){
    var tmp = node.right;
    while(tmp.left) tmp = tmp.left;
    return tmp;
  }
  var tmpChild = node, tmpParent = node.parent;
  while(tmpParent && tmpParent.right == tmpChild){
    tmpChild = tmpParent
    tmpParent = tmpParent.parent;
  }
  return tmpParent;
}

//O(log N) -> items in tree (it will traverse at most DEPTH nodes)
