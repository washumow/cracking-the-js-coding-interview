/*
* Remove duplicates from a list
* Follow up: Without usign buffers
*/

function Node(value){
    this.value = value;
    this.next = null;
}


function removeDups(list){
    var hash = {}, tmp = list;

    if( tmp )
        hash[tmp.value] = true;
    else
        return tmp;

    while(tmp.next){//Runtime n
        if(hash.hasOwnProperty(tmp.next.value)){
            tmp.next = tmp.next.next;
        }else{
            hash[tmp.next.value] = true;
            tmp = tmp.next;
        }
    }
    return list;

}
//O(n)


function removeDupsWithoutHash(list){
    var tmp = list, tmp2, prev;
    while(tmp){//Runtime n
        prev = tmp;
        tmp2 = tmp.next;
        while(tmp2){ //Runtime n/2
            if(tmp.value == tmp2.value){
                prev.next = tmp2.next;
                tmp2 = tmp2.next;
            }else{
                prev = prev.next;
                tmp2 = tmp2.next;
            }
        }
        tmp = tmp.next;
    }
    return list;
}
//O(n^2)

var a = new Node(1), b = new Node(2), c = new Node(2), d = new Node(5), e = new Node(1), f = new Node(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

removeDupsWithoutHash(a);
var tmp = a;
while(tmp){
    console.log(tmp.value);
    tmp = tmp.next;
}
