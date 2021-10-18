const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
module.exports = class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this;
  }

  enqueue(value) {
  const newNode = new LinkedListNode(value);

  // Если нет head или tail, делаем новым узлом head и tail.
  if (!this.head || !this.tail) {
    this.head = newNode;
    this.tail = newNode;
  }

  // Присоединяем новый узел к концу связного списка.
  // Берём последний узел и указываем, что его next будет новым узлом.
  this.tail.next = newNode;

  // Переназначаем tail на новый узел.
  this.tail = newNode;
  }

  dequeue() {
   if (!this.head) {
    return null;
  }

  const deletedHead = this.head;

  // Если у head есть ссылка на следующий "next" узел
  // то делаем его новым head.
  if (this.head.next) {
    this.head = this.head.next;
  } else {
    // Если у head нет ссылки на следующий "next" узел
    // то мы удаляем последний узел.
    this.head = null;
    this.tail = null;
  }

  return deletedHead;
  }

}
