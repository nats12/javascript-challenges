///
/// Implement a Queue (because why not)
///

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.unshift(item);
    }
    dequeue() {
        return this.queue.pop();
    }
    size() {
        return this.queue.length;
    }
}