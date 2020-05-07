class Tree {
    constructor (value) {
        this.value = value
        this.children = {left: null, right: null}
    }

    addChild(value) {
        const openNode = this.findLocation(this, value)
        const newTree = new Tree(value);
        openNode.node.children[openNode.place] = newTree;
        return newTree;
    }

    search(value) {
        const targetChild = this.findLocation(this, value)
    }

    findLocation(node, value) {
        if(node.value > value) {
            if(node.children.left === null) {
                return {node: node, place: 'left'}
            } else {
                return this.findLocation(node.children.left, value)
            }
        } else {
            if(node.children.right === null) {
                return {node: node, place: 'right'}
            } else {
                return this.findLocation(node.children.right, value)
            }

        }
    }
}

const tree = new Tree(8);
console.log(tree)
const branch = tree.addChild(2);
const branch2 = tree.addChild(10);
const leaf = tree.addChild(3);
const leaf2 = tree.addChild(12);
const leaf3 = tree.addChild(6);
const leaf4 = tree.addChild(7);
console.log(tree)