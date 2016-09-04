/*
* Validate if the given tree is a binary search tree
*/

function TreeNode(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function validateBST(node){
    var bst = true;
    if(node.left){
      if(node.left.value < node.value){
        bst = bst && validateBST(node.left);
      }else{
        return false;
      }
    }

    if(!bst)
      return bst;

    if(node.right){
      if(node.right.value > node.value){
        bst = bst && validateBST(node.right);
      }else{
        return false;
      }
    }
    
    return bst;
}

//O(n) n-> items in tree
