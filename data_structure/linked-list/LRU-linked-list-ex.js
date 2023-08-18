/**
 * LRU（Least Recently Used，最近最少使用）是一種暫存淘汰策略 for linked list.
 *  - 原則：最近最少使用的項目可能不太可能在未來被訪問，因此我們優先保留最近使用過的項目。
 * 
 * 
 * Reference:
 *  - https://www.eugene.zone/blog/LRU/
 *  - 
 */

{
  class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
      this.recentlyUsed = new LinkedList();
    }

    get(key) {
      if (this.cache.has(key)) {
        const value = this.cache.get(key);
        this.recentlyUsed.remove(key); // 從最近使用列表中移除該項目
        this.recentlyUsed.add(key); // 將該項目添加到最近使用列表的末尾
        return value;
      }
      return -1; // 若未找到該項目，返回 -1
    }
  
    put(key, value) {
      if (this.cache.size >= this.capacity) {
        const oldestKey = this.recentlyUsed.head.data;
        this.cache.delete(oldestKey);
        this.recentlyUsed.remove(oldestKey);
      }
      this.cache.set(key, value);
      this.recentlyUsed.add(key);
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }

    add(data) {
      const newNode = new Node(data);

      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }

    remove(data) {
      if (!this.head) {
        return;
      }

      if (this.head.data === data) {
        this.head = this.head.next;
        if (!this.head) {
          this.tail = null;
        }
        return;
      }

      let current = this.head;
      while (current.next) {
        if (current.next.data === data) {
          current.next = current.next.next;

          if (!current.next) {
            this.tail = current;
          }
          return;
        }
        current = current.next;
      }
    }
  }

  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  // 創建一個容量為 3 的 LRU 緩存
  const lruCache = new LRUCache(3);

  lruCache.put("A", 1);
  lruCache.put("B", 2);
  lruCache.put("C", 3);

  console.log(lruCache.get("B")); // 預期輸出: 2

  lruCache.put("D", 4);

  console.log(lruCache.get("A")); // 預期輸出: -1，因為 "A" 是最近最少使用的
}