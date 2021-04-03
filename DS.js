// Implement Stack Using Deque
class deque {
    constructor(){
        this.value = [];
    }
    
    insertFirst(n) { this.value.unshift(n); }
    insertLast(n) { this.value.push(n); }

    removeFirst(){ if(!this.isEmpty()) { return this.value.shift(); } }
    removeLast() { if(!this.isEmpty()) { return this.value.pop(); } }
    
    getFirst() { if(!this.isEmpty()) { return this.value[0]; }}
    getLast(){ if(!this.isEmpty()) { return this.value[this.value.length - 1]; }}

    getSize() { return this.value.length; }
    isEmpty(){ 
        if(this.value.length === 0) {
            console.log('deque is empty');
            return true;
        }
        else { return false; }
     }
}

let stack = new deque();
stack.insertLast(5);
stack.insertLast(8);
console.log(stack.removeLast());
console.log(stack.getLast());

// Implementing Binary search tree using js
// we created a node so can called multiple times
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BST {
    constructor(root) {
        this.root = new TreeNode(root);
    }

    insert(value) {
        
        let newNode = new TreeNode(value) 
    
        const fitElement = (node) => {
            // if value is smaller then it will go left
            if(value < node.value) {
                if(!node.left) { 
                    node.left = newNode;
                    console.log(value,'inserted as left child of',node.value)
                }
                else { fitElement(node.next); } // calling recursively until base condition not true 
            }
            // if value greater then go right
            else if(value > node.value) {
                if(!node.right) {
                    node.right = newNode;
                    console.log(value,'inserted as right child of',node.value)
                }
                else { fitElement(node.right); }
            }
        }

        fitElement(this.root); // it will pass the node as root value
    }

    contains(value) {
        var node = this.root;

        while(node) { // it will run until node != null
            if(node.value === value) {
                console.log('tree contains',value)
                return;
            }
            if(value<node.value) { node = node.left; }
            else { node = node.right; }
        }
        
        console.log('tree does not contains',value);
    }

    min() {
        var node = this.root;
        // traversing left until left because in bst left most contains smallest
        while(node.left) {
            node = node.left;
        }
        console.log('minimum value inside tree is',node.value);
        return node.value;
    }

    max() {
        var node = this.root;
        while(node.right) {
            node = node.right;
        }
        console.log('maximum value inside tree is',node.value);
        return node.value;
    }
}

let v = new BST(5);
v.insert(4);
v.insert(8);
v.insert(9);
v.contains(6);
v.min();
v.max();