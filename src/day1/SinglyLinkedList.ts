type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const newNode = { value: item } as Node<T>;
        if (!this.head) {
            this.head = this.tail = newNode;
            this.length = 1;
            return;
        }

        this.length++;
        this.head = newNode;
    }

    append(item: T): void {
        const newNode = { value: item } as Node<T>;
        if (!this.tail) {
            this.tail = this.head = newNode;
            this.length = 1;
            return;
        }
        this.length++;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    get(idx: number): T | undefined {
        let currentNode = this.head;

        for (let i = 0; i < idx && currentNode; i++) {
            currentNode = currentNode?.next;
        }

        return currentNode?.value;
    }

    insertAt(item: T, idx: number): void {
        let node = { value: item } as Node<T>;
        let currentNode = this.head;
        if (idx >= this.length) {
            return;
        }

        for (let i = 0; i < this.length; i++) {
            if (idx === i) {
                break;
            }
            currentNode = currentNode?.next;
        }

        node.next = currentNode;
        currentNode = node;
    }

    remove(item: T): T | undefined {
        return undefined;
    }

    removeAt(idx: number): T | undefined {
        let currentNode = this.head;
        if (idx >= this.length) {
            return;
        }

        for (let i = 0; i < this.length; i++) {
            if (idx === i) {
                break;
            }
            currentNode = currentNode?.next;
        }

        let removeNode = currentNode;
        currentNode = currentNode?.next;

        return currentNode?.value;
    }
}
