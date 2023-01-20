public class testBST {
    public static void main(String[] args) {
        int testPassed = 0;
        int testFailed = 0;

        if (!testBinarySearchTree()) {
            System.out.println("Test Failed: testBST()");
            testFailed++;
        } else {
            testPassed++;
        }

        System.out.println("Test Passed: " + testPassed);
        System.out.println("Test Failed: " + testFailed);

    }

    public static intBST prepareBST() {
        intBST bst = new intBST();
        bst.add(6);
        bst.add(8);
        bst.add(3);
        bst.add(1);
        bst.add(13);
        bst.add(9);
        bst.add(7);
        bst.add(11);

        return bst;
    }

    public static boolean testBinarySearchTree() {
        intBST bst = prepareBST();
        if (!(bst.find(1).getValue() == 1))
            return false;
        if (!(bst.find(11).getValue() == 11))
            return false;
        if (!(bst.find(15) == null))
            return false;

        if (!(bst.find(6).getLeftChild().getValue() == 3))
            return false;
        if (!(bst.find(6).getRightChild().getValue() == 8))
            return false;
        if (!(bst.find(3).getLeftChild().getValue() == 1))
            return false;
        if (!(bst.find(8).getRightChild().getValue() == 13))
            return false;

        String inOrder = "1367891113";
        if (!(bst.inOrderPrintTraversal().equals(inOrder)))
            return false;
        String preOrder = "6318713911";
        if (!(bst.preOrderPrintTraversal().equals(preOrder)))
            return false;
        String postOrder = "1371191386";
        if (!(bst.postOrderPrintTraversal().equals(postOrder)))
            return false;
        
        bst.remove(11);
        if (bst.find(9).getRightChild() != null)
            return false;
        bst.remove(3);
        if (bst.find(6).getLeftChild().getValue() != 1)
            return false;
        bst.remove(6);
        if (bst.find(7).getRightChild().getValue() != 8)
            return false; 

        return true;
    }
}
