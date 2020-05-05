/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    const collections = allCollections(head, k)
    console.log(collections)
    const newHead = collections[0][collections[0].length -1];
    collections.map(set => {
        set.reverse()
        for(let i = 0; i< set.length; i++) {
           add(newHead, set[i])
        }
    })
    return newHead
    
};

const collections = []
const set = []
count = 0
const allCollections = (node, k) => {
    if(node.next === null) {
        set.push(node)
        collections.push(set)
        return collections
    }
    if (count === k ) {
        set.push(node)
        collections.push(set)
        set = [];
        count = 0;
    } else {
        set.push(node)
       allCollections(node.next, k)
    }
    
}


const remove = (node, prevNode) => {
    if(prevNode) {
        prevNode.next = node.next
    }
}

const add = (node, head) => {
    node.next = null
    const tail = findEnd(head);
    tail.next = node
    
}

const findEnd = (node) => {
    if(node.next === null) {
        return node 
    } else{
        findEnd(node.next)
    }
}