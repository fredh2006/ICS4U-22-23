public class arrayStack {
    private int top;
    private Integer[] stack;

    public arrayStack() {
        stack = new Integer[0];
        top = -1;
    }

    public Integer[] push(Integer data) {
        if (stack.length - top < 2) {
            Integer[] temp = new Integer[stack.length + 1];
            for (int i = 0; i < stack.length; i++) {
                temp[i] = stack[i];
            }
            stack = temp;
        }
        stack[++top] = data;
        return stack;
    }

    public Integer pop() {
        if (top < 0)
            return null;
        else {
            int remove = stack[top];
            Integer[] temp = new Integer[stack.length - 1];
            for (int i = 0, k = 0; i < stack.length; i++) {
                if (stack[i] != remove) {
                    temp[k] = stack[i];
                    k++;
                }
            }
            top--;
            stack = temp;
            return remove;
        }
    }

    public Integer pop(int index) {
        if (top < 0)
            return null;
        else {
            int remove = stack[index];
            Integer[] temp = new Integer[stack.length - 1];
            for (int i = 0, k = 0; i < stack.length; i++) {
                if (stack[i] != remove) {
                    temp[k] = stack[i];
                    k++;
                }
            }
            top--;
            stack = temp;
            return remove;
        }
    }

    public Integer peek() {
        if (top < 0)
            return null;
        else
            return stack[top];
    }

    public Integer search() {
        return top;
    }

    public boolean isEmpty() {
        return (top == -1);
    }

    public Integer get(int index) {
        if (index < 0)
            throw new IndexOutOfBoundsException("YOU SUCK");
        else if (index > stack.length)
            throw new IndexOutOfBoundsException("YOU SUCK");
        else {
            return stack[index];
        }
    }

    public String toString() {
        String result = "{";
        for (int i = 0; i <= top; i++) {
            result += stack[i] + ", ";
        }
        if (!isEmpty()) {
            result = result.substring(0, result.length() - 2);
        }
        result += "}";
        return result;
    }

}
