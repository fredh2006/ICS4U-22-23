public class testStack {
    public static void main(String[] args) {
        int testPassed = 0;
        int testFailed = 0;

        if (!testArrayStack()) {
            System.out.println("Test Failed: testArrayStack()");
            testFailed++;
        } else {
            testPassed++;
        }
        if (!testLinkedListStack()) {
            System.out.println("Test Failed: testLinkedListStack()");
            testFailed++;
        } else {
            testPassed++;
        }

        System.out.println("Test Passed: " + testPassed);
        System.out.println("Test Failed: " + testFailed);
    }

    private static linkedListStack prepareLLStack() {
        linkedListStack stack = new linkedListStack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);

        return stack;
    }

    private static boolean testLinkedListStack() {
        linkedListStack stack = prepareLLStack();
        if (stack.get(0) != 5)
            return false;
        if (stack.get(4) != 1)
            return false;
        if (stack.get(2) != 3)
            return false;

        if (stack.pop() != 5)
            return false;
        if (stack.pop() != 4)
            return false;

        if (stack.peek() != 3)
            return false;

        if (stack.search() != 2)
            return false;

        try {
            stack.get(-1);
            return false;
        } catch (IndexOutOfBoundsException ex) {
            return true;
        }
    }

    private static arrayStack prepareArrayStack() {
        arrayStack stack = new arrayStack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);

        return stack;
    }

    private static boolean testArrayStack() {
        arrayStack stack = prepareArrayStack();

        if (stack.get(0) != 1)
            return false;
        if (stack.get(4) != 5)
            return false;
        if (stack.get(2) != 3)
            return false;

        if (stack.pop() != 5)
            return false;
        if (stack.pop() != 4)
            return false;

        if (stack.peek() != 3)
            return false;

        stack.push(6);

        if (stack.peek() != 6)
            return false;

        if (stack.search() != 3)
            return false;

        try {
            stack.get(-1);
            return false;
        } catch (IndexOutOfBoundsException ex) {
            return true;
        }
    }
}
