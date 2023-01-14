public class linkedListStack {
    private intNode head;
    private int top = -1;

    public boolean push(Integer el) {
        head = new intNode(el, head);
        top++;
        return true;
    }

    public Integer pop() {
        if (head == null) {
            return null;
        } else {
            Integer temp = head.getData();
            head = head.getLink();
            top--;
            return temp;
        }
    }

    public boolean isEmpty() {
        return head == null;
    }

    public Integer peek() {
        if (head == null) {
            return null;
        } else {
            return head.getData();
        }
    }

    public Integer search() {
        if (isEmpty()) {
            return -1;
        } else {
            return top;
        }
    }

    public Integer get(int index) {
        if (index < 0)
            throw new IndexOutOfBoundsException("YOU SUCK");
        if (head == null)
            throw new IllegalStateException("YOU SUCK");
        else if (index > top)
            throw new IndexOutOfBoundsException("YOU SUCK");
        else {
            intNode curr = head;
            for (int i = 0; i < index; i++) {
                curr = curr.getLink();
            }
            return curr.getData();
        }
    }

    public String toString() {
        String result = "{";
        intNode curr = head;

        while (curr != null) {
            result += curr.getData() + ", ";
            curr = curr.getLink();
        }

        if (!isEmpty()) {
            result = result.substring(0, result.length() - 2);
        }
        result += "}";

        return result;
    }
}