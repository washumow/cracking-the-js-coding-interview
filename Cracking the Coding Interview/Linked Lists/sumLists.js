/*
*   Given 2 lists that represents an inverted number return a list representing the sum of the lists
*   Ex 6->5->1 + 2->5->4  -> 156 + 454 = 610 ->  0->1->6
*/

function Node(value){
    this.value = value;
    this.next = null;
}


function sumList(num1,num2){
    var carry = 0, tmp1 = num1, tmp2 = num2, res = null, tmp3;
    while(carry || tmp1 || tmp2){

        var x1, x2, sum;
        x1 = tmp1 ? tmp1.value : 0;
        x2 = tmp2 ? tmp2.value : 0;
        sum = x1 + x2 + carry;
        carry = Math.floor(sum/10);
        if(!res){
            res = new Node(sum%10);
            tmp3 = res;
        }else{
            tmp3.next = new Node(sum%10);
            tmp3 = tmp3.next;
        }
        if(tmp1)
            tmp1 = tmp1.next;
        if(tmp2)
            tmp2 = tmp2.next;

    }
    return res;
}
