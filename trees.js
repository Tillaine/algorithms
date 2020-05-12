class Node {
    constructor(value){
        this.value = value
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.rootNode = null;
    }

    add(value) {
        const newNode = new Node(value)
        if(this.rootNode === null) {
            this.rootNode = newNode
        } else {
            this.placeNode(newNode, this.rootNode)
        }

    }

    placeNode(newNode, node){
        if (node.value > newNode.value) {
            if (node.left) {
                return this.placeNode(newNode, node.left)
            } else {
                node.left = newNode;
                return newNode
            }
        } else {
            if (node.right) {
                return this.placeNode(newNode, node.right)
            } else {
                node.right = newNode;
                return newNode
            }
            
        }
    }
}


const tree = new BinarySearchTree() 
tree.add(4)
tree.add(3)
tree.add(8)
tree.add(2)

console.log(tree)