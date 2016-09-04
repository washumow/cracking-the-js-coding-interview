/*
* Check if a tree is balanced, a balanced tree is one that all the depths dont differ by more than 1
*/

function TreeNode(value){
    this.value = value;
    this.left = null;
    this.right = null;
}


function checkBalanced(tree){
  var depths = [];
  return isBalancedTree(tree,0,depths,0);
}

function isBalancedTree(node,depth,list){
  if(!node){
    if(list.indexOf(depth) == -1){
      if(list.length == 2 )
        return false;

      if(Math.abs(depth - list[0]) > 1)
        return false;

      list.push(depth);

    }
    return true;
  }
  if(!isBalancedTree(node.left,depth+1,list))
    return false;
  if(!isBalancedTree(node.right,depth+1,list))
    return false;

  return true;
}
