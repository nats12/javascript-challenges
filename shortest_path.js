const START = 0;
const END = 5;


const findShortestPath = (nodes) => {
    const bfsQueue = new Queue();
    bfsQueue.enqueue(START);
    const previousNodeInPath = {};
    previousNodeInPath[START] = null;

    while(bfsQueue.size() > 0) {
        const node = bfsQueue.dequeue();

        if(node === END) {
            return findReversedPath(previousNodeInPath);
        }

        for(let connectedNode of nodes[node]) {
            if(previousNodeInPath[connectedNode] === undefined) {
                bfsQueue.enqueue(connectedNode);
                previousNodeInPath[connectedNode] = node;
            }
        }
    }

    return null;

}

const findReversedPath = (previousNodeInPath) => {
    let node = END;
    const paths = [];

    while(node !== null) {
        paths.push(node);
        node = previousNodeInPath[node];
    }

    return paths.reverse();
}

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

const input = {
    0: [1], 
    1: [2, 3], 
    2: [1, 4, 5],
    3: [1, 4],
    4: [2, 3],
    5: [2] 
};

console.log(findShortestPath(input, 3));