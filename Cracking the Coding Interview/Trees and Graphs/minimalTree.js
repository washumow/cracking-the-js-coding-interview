/*
* Given a sorted array (increasing order) with unique integers, write an algorithm
* to createa binary search tree with the minimal height
*/

function TreeNode(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function minimalTree(array){
    if( array.length == 0 )
      return null;
    if( array.length == 1)
      return new TreeNode(array[0]);

    var x = Math.floor(array.length / 2);
    var node = new TreeNode(array[x]);

    node.left = minimalTree(array.slice(0,x));//Runtime current length/2
    node.right = minimalTree(array.slice(x+1));//Runtime current length/2

    return node;
}

//O(n log n) n-> number of items in array
