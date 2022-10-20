/*
Input: 1->2->3->4->5
Output: 5->1->2->3->4

Input: 3->8->1->5->7->12
Output: 12->3->8->1->5->7  

*/
  

/* javascript Program to move last element to front in a given linked list */
     
    /* Linked list Node */
    class Node {
        constructor(val) {
            this.data = val;
            this.next = null;
        }
    }
var head; // head of list

function moveToFront() {
    /*
     * If linked list is empty or it contains only one node then simply return.
     */
    if (head == null || head.next == null)
        return;

    /* Initialize second last and last pointers */
var secLast = null;
var last = head;

    /*
     * After this loop secLast contains address of second last node and last
     * contains address of last node in Linked List
     */
    while (last.next != null) {
        secLast = last;
        last = last.next;
    }

    /* Set the next of second last as null */
    secLast.next = null;

    /* Set the next of last as head */
    last.next = head;

    /* Change head to point to last node. */
    head = last;
}

/* Utility functions */

/* Inserts a new Node at front of the list. */
 function push(new_data) {
    /*
     * 1 & 2: Allocate the Node & Put in the data
     */
var new_node = new Node(new_data);

    /* 3. Make next of new Node as head */
    new_node.next = head;

    /* 4. Move the head to point to new Node */
    head = new_node;
}

/* Function to print linked list */
function printList() {
var temp = head;
    while (temp != null) {
        console.log(temp.data + " ");
        temp = temp.next;
    }
    console.log();
}

/* Driver program to test above functions */

    /* Constructed Linked List is 1->2->3->4->5->null */
    push(5);
    push(4);
    push(3);
    push(2);
    push(1);

    console.log("Linked List before moving last to front<br/> ");
    printList();

    moveToFront();

    console.log("<br/>Linked List after moving last to front <br/>");
    printList();

