/*

Input: linked list = 4 -> 3 -> 7 -> 9 -> 2
Output: 0

*/


// javascript program to count number of nodes
// in loop in a linked list if loop is
// present
 
    /* Link list node */
    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }
     
        // Returns count of nodes present in loop.
        function countNodes( n) {
            var res = 1;
             temp = n;
            while (temp.next != n) {
                res++;
                temp = temp.next;
            }
            return res;
        }
     
        /*
         * This function detects and counts loop nodes in the list. If loop is not there
         * in then returns 0
         */
        function countNodesinLoop( list) {
            var slow_p = list, fast_p = list;
     
            while (slow_p != null && fast_p != null && fast_p.next != null) {
                slow_p = slow_p.next;
                fast_p = fast_p.next.next;
     
                /*
                 * If slow_p and fast_p meet at some point then there is a loop
                 */
                if (slow_p == fast_p)
                    return countNodes(slow_p);
            }
     
            /* Return 0 to indicate that there is no loop */
            return 0;
        }
     
        function newNode(key) {
             temp = new Node(key);
     
            return temp;
        }
     
        /* Driver program to test above function */
         
             head = newNode(1);
            head.next = newNode(2);
            head.next.next = newNode(3);
            head.next.next.next = newNode(4);
            head.next.next.next.next = newNode(5);
     
            /* Create a loop for testing */
            head.next.next.next.next.next = head.next;
     
            console.log(countNodesinLoop(head));