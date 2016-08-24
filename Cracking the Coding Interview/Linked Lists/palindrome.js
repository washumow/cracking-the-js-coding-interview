/*
*   Write a function that checks if a linked list is a palindrome
*/

function Node(value){
    this.value = value;
    this.next = null;
}

function isPalindrome(list){
    var reverse, tmp = list;
    if(!tmp)
        return false;
    reverse = new Node(tmp.value);
    while(tmp.next){ //Runtime n
        var x = new Node(tmp.next.value);
        x.next = reverse;
        reverse = x;
        tmp = tmp.next;
    }

    tmp = list;
    var tmp2 = reverse;
    while(tmp){//Runtime n
        if(tmp.value != tmp2.value)
            return false;
        tmp = tmp.next;
        tmp2 = tmp2.next;
    }
    return true;
}

//O(n) n-> number of items in the list
