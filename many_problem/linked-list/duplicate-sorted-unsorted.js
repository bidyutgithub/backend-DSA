//<<<<<<<<<<<<<<<<<<sorted>>>>>>>>>>>>>>>>>>>>>>>

/*
Write a function that takes a list sorted in non-decreasing order and deletes any duplicate nodes from the list.
 The list should only be traversed once. 
For example if the linked list is 11->11->11->21->43->43->60 then removeDuplicates() should convert the list to 11->21->43->60. 


*/


class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}
    // The function removes duplicates
    // from a sorted list
    function removeDuplicates(head) {
        /*
         Pointer to store the pointer 
         of a node to be deleted
         */
       var to_free;
  
        /* do nothing if the list is empty */
        if (head == null)
            return null;
  
        /* Traverse the list till last node */
        if (head.next != null) {
  
            /* Compare head node with next node */
            if (head.data == head.next.data) {
                /*
                 The sequence of steps is important. 
                 to_free pointer stores the next of head
                 pointer which is to be deleted.
                 */
                to_free = head.next;
                head.next = head.next.next;
                removeDuplicates(head);
            }
  
            /* This is tricky: only advance
            if no deletion */
            else {
                removeDuplicates(head.next);
            }
        }
        return head;
    }
  
    /* UTILITY FUNCTIONS */
    /*
     Function to insert a node at 
     the beginning of the linked list
     */
    function push(head_ref , new_data) {
        /* allocate node */
var new_node = new Node();
  
        /* put in the data */
        new_node.data = new_data;
  
        /* link the old list off the new node */
        new_node.next = (head_ref);
  
        /* move the head to point to the new node */
        (head_ref) = new_node;
        return head_ref;
    }
  
    /* Function to print nodes in a given linked list */
    function printList(node) {
        while (node != null) {
            console.log(" " + node.data);
            node = node.next;
        }
    }
  
    /* Driver code */
      
        /* Start with the empty list */
var head = null;
  
        /*
          Let us create a sorted linked list to
         test the functions Created linked list
          will be 11.11.11.13.13.20
         */
        head = push(head, 20);
        head = push(head, 13);
        head = push(head, 13);
        head = push(head, 11);
        head = push(head, 11);
        head = push(head, 11);
  
        console.log("Linked list before" + 
        " duplicate removal <br/>");
        printList(head);
  
        /* Remove duplicates from linked list */
        head = removeDuplicates(head);
  
        console.log("<br/>Linked list after" + 
        " duplicate removal <br/>");
        printList(head);
//==================================================================

//<<<<<<<<<<<<<<unsorted>>>>>>>>>>>>>>>>>>>>>
 /* 
Input: linked list = 12->11->12->21->41->43->21 
Output: 12->11->21->41->43. 
Explanation: Second occurrence o 12 and 21 is removed

Input: linked list = 12->11->12->21->41->43->21 
Output: 12->11->21->41->43. 

*/

// javascript program to remove duplicates from unsorted
// linked list
 
 
 
var head;
 
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}
/*
 * Function to remove duplicates from an unsorted linked list
 */
function remove_duplicates() {
    var ptr1 = null, ptr2 = null, dup = null;
    ptr1 = head;

    /* Pick elements one by one */
    while (ptr1 != null && ptr1.next != null) {
        ptr2 = ptr1;

        /*
         * Compare the picked element with rest of the elements
         */
        while (ptr2.next != null) {

            /* If duplicate then delete it */
            if (ptr1.data == ptr2.next.data) {

                /* sequence of steps is important here */
                dup = ptr2.next;
                ptr2.next = ptr2.next.next;
 
            } else /* This is tricky */ {
                ptr2 = ptr2.next;
            }
        }
        ptr1 = ptr1.next;
    }
}

function printList( node) {
    while (node != null) {
        console.log(node.data + " ");
        node = node.next;
    }
}

 
    head = new Node(10);
    head.next = new Node(12);
    head.next.next = new Node(11);
    head.next.next.next = new Node(11);
    head.next.next.next.next = new Node(12);
    head.next.next.next.next.next = new Node(11);
    head.next.next.next.next.next.next = new Node(10);

    console.log("Linked List before removing duplicates : <br/> ");
    printList(head);

    remove_duplicates();
    console.log("<br/>");
    console.log("Linked List after removing duplicates : <br/> ");
    printList(head);
