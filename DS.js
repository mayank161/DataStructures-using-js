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
                else { fitElement(node.left); } // calling recursively until base condition not true 
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
    // merging two BST
    merge(node2) {
        var node1 = this.root;
        var stack1 = [];
        var stack2 = [];
        const sort1 = (node) => {
            if(node === null) { return;}
            sort1(node.right);
            stack1.push(node.value);
            sort1(node.left);
        }
        const sort2 = (node) => {
            if(node === null) { return;}
            sort2(node.right);
            stack2.push(node.value);
            sort2(node.left);
        }
        sort1(node1);
        sort2(node2);
        
        const merged = [];
        var s1 = stack1.length - 1,s2 = stack2.length - 1;
        while(s1 >= 0 && s2 >= 0) {
            if(stack1[s1]<stack2[s2]) { merged.push(stack1[s1--]); }
            else { merged.push(stack2[s2--]); }
        }
        while(s1>=0) { merged.push(stack1[s1--]); }
        while(s2>=0) { merged.push(stack2[s2--]); }
        
        console.log('after merging',stack1,'and',stack2);
        console.log('the merged BST will be',merged);
    }
    
    // preOrder Traversal
    preOrder() {
        var node = this.root;
        var array = [];
        const pre = (node) =>{
            if(!node) { return; }
            array.push(node.value);
            pre(node.left);
            pre(node.right);   
        }
        pre(node);

        console.log('preOrder traversal of the tree is',array);
    }
}

let v = new BST(5);
v.insert(4);
v.insert(8);
v.insert(9);
v.contains(6);
v.min();
v.max();

let p = new BST(15);
p.insert(13);
p.insert(18);
p.insert(20);
p.insert(19);
p.insert(6);
v.merge(p.root);

p.preOrder();