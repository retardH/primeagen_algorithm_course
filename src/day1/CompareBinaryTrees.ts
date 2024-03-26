export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    // structural check to see if we can or cannot recurse further
    if (a === null && b === null) {
        return false;
    }

    // structural check to compare the shape of the trees
    if (a === null || b === null) {
        return false;
    }

    // value check
    if (a.value !== b.value) {
        return false;
    }

    return compare(a.left, b.left) && compare(a.right, b.right);
}
