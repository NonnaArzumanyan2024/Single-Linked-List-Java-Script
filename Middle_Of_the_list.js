/*
LeetCode Problem 876: Middle of the Linked List

Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.

Example:

Input: [1,2,3,4,5]
Output: Node with value 3

Input: [1,2,3,4,5,6]
Output: Node with value 4
*/

class Node {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

// Finds and returns the middle node of the linked list
function middleOfList(head) {
    // If the list is empty or has only one node, return it directly
    if (head === null || head.next === null) {
        return head;
    }

    // Initialize two pointers: slow moves 1 step, fast moves 2 steps
    let slow = head;
    let fast = head;

    // Traverse the list: when fast reaches the end, slow will be at the middle
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Return the middle node
    return slow;
}

// Helper function to print the entire linked list
function printList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.value);
        current = current.next;
    }
}

// Creating the linked list: 1 -> 2 -> 3 -> 4 -> 5
let list5 = new Node(5, null);
let list4 = new Node(4, list5);
let list3 = new Node(3, list4);
let list2 = new Node(2, list3);
let list1 = new Node(1, list2); // head

// Print the full list
printList(list1);

// Find and print the middle node
let middleNode = middleOfList(list1);
console.log("Middle node value:", middleNode.value);
 


