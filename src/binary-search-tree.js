const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
    constructor(data) {
        this.data = data; // node value
        this.left = null;   // left node child reference
        this.right = null; // right node child reference
    }
}
module.exports = class BinarySearchTree {
  constructor() {
        this.roott = null; // корень bst
    }

  root() {
    if (this.roott === null) {
      return null
    }
    else {
      return this.roott
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            this.insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            this.insertNode(node.right, newNode);
        }
    }
}
  add(data) {
    let newNode = new Node(data);
    if (this.roott === null) {
        this.roott = newNode;
    } else {
        this.insertNode(this.roott, newNode); // helper method below
    }
  }

  hasorder(currentNode, data) {
    if (currentNode !== null) {
      if(currentNode.data == data){
          return true
        }
            this.hasorder(currentNode.leftChild, data);
            this.hasorder(currentNode.rightChild, data);
    }
    return false;
  }
  has(data) {
    let currentNode = this.roott;
    this.hasorder(currentNode, data)
  }
  findorder(currentNode, data) {
    if (currentNode !== null) {
      if(currentNode.data == data){
          return currentNode
        }
            this.findorder(currentNode.leftChild, data);
            this.findorder(currentNode.rightChild, data);
    }
    return null;
  }
  find(data) {
    let currentNode = this.roott;
    this.findorder(currentNode, data);
  }

  minNode(node) {
    // если слева от узла ноль тогда это должен быть минимальный узел
    if (node.left === null)
        return node;
    else
        return this.minNode(node.left);
  }
  remove(data) {
    this.roott = this.removeNode(this.roott, data); // helper method below
  }
  removeNode(node, data) {
    if (node === null) {
        return null;
    // если данные, которые нужно удалить, меньше, чем данные корня, переходим к левому поддереву
    } else if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
    // если данные, которые нужно удалить, больше, чем данные корня, переходим к правому поддереву
    } else if (data > node.data) {
        node.right = this.removeNode(node.right, data);
        return node;
    // если данные такие как данные корня, удаляем узел
    } else {
        // удаляем узел без потомков (листовой узел (leaf) или крайний)
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }
        // удаляем узел с одним потомком
        if (node.left === null) {
            node = node.right;
            return node;
        } else if(node.right === null) {
            node = node.left;
            return node;
        }
        // удаляем узел с двумя потомками
        // minNode правого поддерева хранится в новом узле
        let newNode = this.minNode(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(node.right, newNode.data);
        return node;
    }
}
  minorder(node) {
    if (node.left === null)
        return node;
    else
        return this.minorder(node.left);
  }
  min() {
    let currentNode = this.roott
    this.minorder(currentNode)
  }

  maxorder(node) {
    if (node.right === null)
        return node;
    else
        return this.maxorder(node.right);
  }
  max() {
    let currentNode = this.roott
    this.maxorder(currentNode)
  }
}