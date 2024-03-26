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
        newNode.next = this.head;
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

    private getNodeByIdx(idx: number): Node<T> | undefined {
        let currentNode = this.head;

        for (let i = 0; i < idx && currentNode; ++i) {
            currentNode = currentNode?.next;
        }

        return currentNode;
    }

    get(idx: number): T | undefined {
        const out = this.getNodeByIdx(idx);
        return out?.value;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            return;
        }

        if (idx === 0) {
            this.prepend(item);
        }

        if (idx === this.length) {
            this.append(item);
        }

        let currentNode = this.getNodeByIdx(idx);
        let node = { value: item } as Node<T>;
        node.next = currentNode;
        currentNode = node;
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        let prevCurrNode: Node<T> | undefined;
        for (let i = 0; i < this.length && curr; ++i) {
            if (curr.value === item) {
                break;
            }
            prevCurrNode = curr;
            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }

        this.length--;
        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            this.length = 0;
            return out;
        }

        let out = curr.value;
        if (curr === this.head) {
            this.head = curr.next;
            curr = undefined;
            return out;
        }

        if (curr === this.tail) {
            this.tail = prevCurrNode;
            curr = undefined;
            return out;
        }

        (prevCurrNode as Node<T>).next = curr.next;
        curr = undefined;
        return out;
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length) {
            return undefined;
        }

        let curr = this.head;
        let prevCurrNode: Node<T> | undefined;
        for (let i = 0; i < idx && curr; ++i) {
            prevCurrNode = curr;
            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }

        this.length--;
        if (this.length === 0) {
            let out = this.head?.value;
            this.head = this.tail = undefined;
            this.length = 0;
            return out;
        }

        if (curr === this.head) {
            this.head = curr?.next;
            return curr?.value;
        }

        if (curr === this.tail) {
            this.tail = prevCurrNode;
            return curr?.value;
        }

        let out = curr?.value;
        (prevCurrNode as Node<T>).next = curr?.next;
        curr = undefined;
        return out;
    }
}
