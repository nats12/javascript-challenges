class BinaryTreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


const root = new BinaryNode(42);
root.left = new BinaryNode(20);
root.left.left = new BinaryNode(20);
root.left.left.right = new BinaryNode(17);
root.right = new BinaryNode(50);
root.right.left = new BinaryNode(70);

console.log(root);
