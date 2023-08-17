/**
 * linked-list
 * 
 * 
 */

{
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  let node1 = new Node(1);
  let node2 = new Node(2);
  node1.next = node2;

  console.log(node1.data); // 1
  console.log(node1.next.data); // 2
}