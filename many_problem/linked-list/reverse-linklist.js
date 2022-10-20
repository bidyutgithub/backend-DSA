/*
Input: Head of following linked list 
1->2->3->4->NULL 
Output: Linked list should be changed to, 
4->3->2->1->NULL

Input: Head of following linked list 
1->2->3->4->5->NULL 
Output: Linked list should be changed to, 
5->4->3->2->1->NULL

*/
//////////itrative mathod/////////////////////////////////////

var head;
 
     class Node {
        constructor(val) {
            this.data = val;
            this.next = null;
        }
    }
 
    /* Function to reverse the linked list */
    function reverse(node) {
    var prev = null;
    var current = node;
    var next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        node = prev;
        return node;
    }
 
    // prints content of double linked list
    function printList(node) {
        while (node != null) {
            console.log(node.data + " ");
            node = node.next;
        }
    }
 
    // Driver Code
     
        head = new Node(85);
        head.next = new Node(15);
        head.next.next = new Node(4);
        head.next.next.next = new Node(20);
 
        console.log("Given Linked list<br/>");
        printList(head);
        head = reverse(head);
        console.log("<br/>");
        console.log("Reversed linked list<br/> ");
        printList(head);
//=======================================================
///////////recursive mathod///////////////////////////

/*

Given linked list
85 15 4 20 
Reversed Linked list 
20 4 15 85

*/
var head; // head of list
class Node {
   constructor(val) {
       this.data = val;
       this.next = null;
   }
}

function reverse(head) {
   if (head == null || head.next == null)
       return head;

   /*
    * reverse the rest list and put the first element at the end
    */
   var rest = reverse(head.next);
   head.next.next = head;

   /* tricky step -- see the diagram */
   head.next = null;

   /* fix the head pointer */
   return rest;
}

/* Function to print linked list */
function print() {
var temp = head;
   while (temp != null) {
       console.log(temp.data + " ");
       temp = temp.next;
   }
     console.log();
}

function push(data) {
var temp = new Node(data);
   temp.next = head;
   head = temp;
}

/* Driver program to test above function */

   /* Start with the empty list */

   push(20);
   push(4);
   push(15);
   push(85);

   console.log("Given linked list<br/>");
   print();

   head = reverse(head);

   console.log("<br/>Reversed Linked list<br/>");
   print();






