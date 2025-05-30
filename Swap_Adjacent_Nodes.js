/*
LeetCode Problem 24: Swap Nodes in Pairs

Description:
Given the head of a linked list, swap every two adjacent nodes and return its head.
You must solve the problem without modifying the values in the list’s nodes.
Only nodes themselves may be changed.

Example:
Input:  [1, 2, 3, 4]
Output: [2, 1, 4, 3]
*/

class Node {
        constructor(value = 0, next = null) {
                this.value = value;
                this.next = next;
        }
}

function swapPairs(head) {
        // If the list has 0 or 1 node, there's nothing to swap
        if (head === null || head.next === null) {
                return head;
        }

        let prev = null;               // Keeps track of the previous node after swapping
        let current = head;           // Points to the current node to be swapped
        let newHead = head.next;      // After the first swap, this will be the new head

        while (current !== null && current.next !== null) {
                let first = current;              // First node in the current pair
                let second = current.next;        // Second node in the current pair
                let next = second.next;           // The node after the current pair

                // Swap the pair
                second.next = first;
                first.next = next;

                // Connect the previous pair's tail to the new head of the current pair
                if (prev) {
                        prev.next = second;
                }

                // Move prev and current pointers forward for the next pair
                prev = first;
                current = next;
        }

        return newHead;
}

// Utility function to print the values in the linked list
function printNodes(head) {
        let current = head;
        while (current !== null) {
                console.log(current.value);
                current = current.next;
        }
}

// Create the linked list: 1 -> 2 -> 3 -> 4
let node4 = new Node(4, null);
let node3 = new Node(3, node4);
let node2 = new Node(2, node3);
let node1 = new Node(1, node2); // Head node

console.log("list before swap");
printNodes(node1);

let newHead = swapPairs(node1);

console.log("list after swap");
printNodes(newHead);



