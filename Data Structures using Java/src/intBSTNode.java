public class intBSTNode {
    private Integer value;
    private intBSTNode leftChild;
    private intBSTNode rightChild;

    public intBSTNode(Integer value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }

    public intBSTNode(Integer value, intBSTNode leftChild, intBSTNode rightChild) {
        this.value = value;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public intBSTNode getLeftChild() {
        return leftChild;
    }

    public void setLeftChild(intBSTNode leftChild) {
        this.leftChild = leftChild;
    }

    public intBSTNode getRightChild() {
        return rightChild;
    }

    public void setRightChild(intBSTNode rightChild) {
        this.rightChild = rightChild;
    }

    public boolean hasLeftChild() {
        return leftChild != null;
    }

    public boolean hasRightChild() {
        return rightChild != null;
    }

}
