class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    var thisNode = this.root;
    while (true) {
      if (val < thisNode.val) {
        if (thisNode.left === null) {
          thisNode.left = new Node(val);
          return this;
        } else {
          thisNode = thisNode.left;
        }
      } else if (val > thisNode.val) {
        if (thisNode.right === null) {
          thisNode.right = new Node(val);
          return this;
        } else {
          thisNode = thisNode.right
        }
      } 
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, thisNode = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < thisNode.val) {
      if (thisNode.left === null) {
        thisNode.left = new Node(val);
        return this;
      } else {
        return this.insertRecursively(val, thisNode.left);
      }
    } else if (val > thisNode.val) {
      if (thisNode.right === null) {
        thisNode.right = new Node(val);
        return this;
      } else {
        return this.insertRecursively(val, thisNode.right);
      }
    }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let thisNode = this.root;
    let found = false;

    if (val === thisNode.val) return thisNode;

    while (thisNode && !found) {
      if (val < thisNode.val) {
        thisNode = thisNode.left
      } else if (val > thisNode.val) {
        thisNode = thisNode.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;
    return thisNode;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, thisNode = this.root) {
    if (this.root === null) return undefined;

    if (val < thisNode.val) {
      if (thisNode.left === null) return undefined;
      return this.findRecursively(val, thisNode.left);
    } else if (val > thisNode.val) {
      if (thisNode.right === null) return undefined;
      return this.findRecursively(val, thisNode.right);
    }
    return thisNode;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let d = [];
    let current = this.root;

    const traverse = (node) => {
      d.push(node.val);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }

    traverse(current);
    return d;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let d = [];
    let current = this.root;

    const traverse = (node) => {
      node.left && traverse(node.left);
      d.push(node.val);
      node.right && traverse(node.right);
    }

    traverse(current);
    return d;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let d = [];
    let current = this.root;

    const traverse = (node) => {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      d.push(node.val);
    }

    traverse(current);
    return d;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let d = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      d.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return d;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
