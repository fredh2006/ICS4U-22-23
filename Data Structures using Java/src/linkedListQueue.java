public class linkedListQueue {
    private intLinkedList queue;

    public linkedListQueue() {
        queue = new intLinkedList();
    }

    public boolean isEmpty() {
        return queue.isEmpty();
    }

    public void clear() {
        queue = new intLinkedList();
    }

    public boolean enqueue(Integer el) {
        return queue.add(el);
    }

    public Integer dequeue() {
        return queue.removeFront();
    }

    public Integer peak() {
        return queue.get(0);
    }

    public Integer get(int index) {
        if (index < 0)
            throw new IndexOutOfBoundsException("YOU SUCK");
        if (queue.isEmpty())
            throw new IllegalStateException("YOU SUCK");
        else if (index > queue.size())
            throw new IndexOutOfBoundsException("YOU SUCK");
        else {
            return queue.get(index);
        }
    }
}