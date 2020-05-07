let path = [];

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
        path.push(node.value);
        const updatedPath = path;
        if(node.value > value) {
            if(node.children.left === null) {
                path = [];
                return {node: node, place: 'left', path: updatedPath}
            } else {
                return this.findLocation(node.children.left, value)
            }
        } else {
            if(node.children.right === null) {
                path = [];
                return {node: node, place: 'right', path: updatedPath}
            } else {
                return this.findLocation(node.children.right, value)
            }
        }
    }
    countEdges (node1, node2) {
        debugger;
        const path1 = this.findLocation(node1).path;
        const path2 = this.findLocation(node2).path;
        console.log(path1)
        const shortest = path1.length < path2.length ? path1 : path2;
        const longest = path1.length > path2.length ? path1 : path2;
        for (let i = 0; i < shortest.length; i++) {
            if (longest.includes(shortest[i]))  {
                
            }
        }
        //find nearest common ancstor 
        //crawl tree to find node 1
            //look backwards from 1 to see if 2 is also a decendant 
            //search for each node from common ancestor and increment count 
            //return sum of steps from 1 and 2
    }
 
}



const buildTree = (values, n, node1, node2) => {
    const tree = new Tree(values.shift())
    values.map(value => tree.addChild(value))
    tree.countEdges(node1, node2);
    console.log(tree)
    return tree;
    
}

buildTree([8,1,4,5,2,11,3], null, 3, 11)


// const tree = new Tree(8);
// console.log(tree)
// const branch = tree.addChild(2);
// const branch2 = tree.addChild(10);
// const leaf = tree.addChild(3);
// const leaf2 = tree.addChild(12);
// const leaf3 = tree.addChild(6);
// const leaf4 = tree.addChild(7);
// console.log(tree)