/*

Given a singly linked list, find the middle of the linked list. For example,
 if the given linked list is 1->2->3->4->5 then the output should be 3. 
 If there are even nodes, then there would be two middle nodes,
 we need to print the second middle element.
 For example, if the given linked list is 1->2->3->4->5->6 then the output should be 4. 

*/


var head; // head of the linked list.
 
    /* Linked list node */
    class Node {
        constructor(val) {
            this.data = val;
            this.next = null;
        }
    }
     
    /* Function to add a new node*/
    function pushNode(new_data) {
        var new_node = new Node(new_data);
        new_node.next = head;
        head = new_node;
    }
     
    /*
     * This function prints contents of linked
     list starting from the given node
     */
     function printNode() {
     var tnode = head;
        while (tnode != null) {
            console.log(tnode.data + "->");
            tnode = tnode.next;
        }
        console.log("NULL<br/>");
    }
     
    /*Finding the length of the list.*/
    function getLen(){
        let length = 0;
        var temp = head;
        while(temp!=null){
            length+=1;
            temp = temp.next;
        }
        return length;
    }
     
    /*Printing the middle element of the list.*/
    function printMiddle(){
        if(head!=null){
            let length = getLen();
            var temp = head;
            let middleLength = length/2;
            while(parseInt(middleLength)!=0){
                temp = temp.next;
                middleLength--;
            }
            console.log("The middle element is [" + temp.data + "]<br/><br/>");
        }
    }
     
        for (let i = 5; i >= 1; --i) {
            pushNode(i);
            printNode();
            printMiddle();
        }