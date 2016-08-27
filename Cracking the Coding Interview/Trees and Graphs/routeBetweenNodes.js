/*
*   Given a directed graph, design an algorithm to find out wheter there is a route between two nodes
*   Assumptions: Values not repeated, if values can be repeated we should add uniqueIDs to nodes in this case we will supp
*/

function Node(value){
    this.value = value;
    this.connections = [];
}

function areConnected(node1,node2){
    var hash = {}, q1 = [], q2 = [];
    hash[node1.value] = "expanded1";
    hash[node2.value] = "expanded2";
    q1.push(node1);
    q2.push(node2);
    while(q1.length > 0 && q2.length > 0){ //Runtime d/2 d-> distance from nodes
        var tmp1 = q1.shift(), tmp2 = q2.shift();
        if(expandNode(tmp1,q1,hash,"expanded1"))//Runtime n-1 (because max connections should be n-1)
            return true;
        if(expandNode(tmp2,q2,hash,"expanded2"))//Runtime n-1
            return true;
    }
    return false;

}

function expandNode(node,q,hash,mark){//Runtime c -> connections
    for(var i = 0; i < node.connections.length; i++){
        var value = node.connections[i].value;
        if(hash.hasOwnProperty(value)){
            if( hash[value] != mark ){
                return true;
            }
        }else{
            hash[value] = mark;
            q.push(node.connections[i])
        }
    }
    return false;
}

//O(d*n) d->distance between nodes & n->nodes
