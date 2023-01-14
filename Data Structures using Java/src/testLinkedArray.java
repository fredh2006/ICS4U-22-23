public class testLinkedArray {
    public static void main(String[] args) {
        int testPassed = 0;
        int testFailed = 0;

        if (!testAddNode()) {
            System.out.println("Test Failed: testAddNode()");
            testFailed++;
        } else {
            testPassed++;
        }
        if (!testRemoveNode()) {
            System.out.println("Test Failed: testRemoveNode()");
            testFailed++;
        } else {
            testPassed++;
        }
        if (!testGet()) {
            System.out.println("Test Failed: testGet()");
            testFailed++;
        } else {
            testPassed++;
        }

        System.out.println("Test Passed: " + testPassed);
        System.out.println("Test Failed: " + testFailed);
    }

    private static intLinkedList prepareLinkedList() {
        intLinkedList list = new intLinkedList();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);

        return list;
    }

    private static boolean testGet() {
        intLinkedList list = prepareLinkedList();
        Integer i = list.get(0);
        if(i != 1)
            return false;
        i = list.get(list.size()-1);
        if(i!=5)
            return false;
        i = list.get(2);
        if(i != 3)
            return false;
        try{
            i = list.get(-1);
            return false;
        }catch(IndexOutOfBoundsException ex){
            return true;
        }
    }

    private static boolean testAddNode() {
        intLinkedList list = prepareLinkedList();

        list.add(6);
        if (list.get(5) != 6 || list.size() != 6)
            return false;
        list.addFront(4);
        list.addFront(5);
        if (list.get(0) != 5 || list.get(1) != 4 || list.size() != 8)
            return false;
        list.add(1, 6);
        if (list.get(1) != 6 || list.get(0) != 5 || list.size() != 9)
            return false;
        list.add(0, 7);
        if (list.get(0) != 7 || list.get(1) != 5 || list.size() != 10)
            return false;
        list.add(list.size(), 8);
        if (list.get(list.size() - 1) != 8 || list.size() != 11)
            return false;

        return true;
    }

    private static boolean testRemoveNode() {
        intLinkedList list = new intLinkedList();
        Integer temp = list.remove(6);
        if (temp != null)
            return false;

        list = prepareLinkedList();
        if (list.size() != 5 || list.get(0) != 1 || list.get(4) != 5)
            return false;

        temp = list.remove(3);
        if (temp != 3 || list.size() != 4)
            return false;

        temp = list.remove(1);
        if (temp != 1 || list.size() != 3)
            return false;

        temp = list.remove(5);
        if (temp != 5 || list.size() != 2)
            return false;

        temp = list.remove(23);
        if (temp != null || list.size() != 2)
            return false;

        list = prepareLinkedList();

        temp = list.removeFront();
        if (temp != 1 || list.size() != 4)
            return false;

        return true;
    }

}
