public class intBST {
    private intBSTNode root;

    public intBST() {
        this.root = null;
    }

    public static class Global{
        public static String inOrder = "";
        public static String preOrder = "";
        public static String postOrder = "";
    }

    public intBSTNode add(Integer val) {
        if(root==null){
            root = new intBSTNode(val);
        }
        return addRecursive(root, val);
    }

    public intBSTNode find(Integer val){
        return findRecursive(root, val);
    }

    public String preOrderPrintTraversal() {
        return preOrderPrintTraversal(root);
     }

    private String preOrderPrintTraversal(intBSTNode root) {
        Global.preOrder = Global.preOrder + root.getValue();
        if (root.hasLeftChild()) {
           preOrderPrintTraversal(root.getLeftChild());
        }
  
        if (root.hasRightChild()) {
           preOrderPrintTraversal(root.getRightChild());
        }

        return Global.preOrder;
     }
  
     public String postOrderPrintTraversal() {
        return postOrderPrintTraversal(root);
     }
  
     private String postOrderPrintTraversal(intBSTNode root) {
        if (root.hasLeftChild()) {
           postOrderPrintTraversal(root.getLeftChild());
        }
  
        if (root.hasRightChild()) {
           postOrderPrintTraversal(root.getRightChild());
        }
  
        Global.postOrder = Global.postOrder + root.getValue();
        return Global.postOrder;
  
     }
  
     public String inOrderPrintTraversal() {
        return inOrderPrintTraversal(root);
     }
  
     private String inOrderPrintTraversal(intBSTNode root) {
        if (root.hasLeftChild()) {
           inOrderPrintTraversal(root.getLeftChild());
        }
  
        Global.inOrder = Global.inOrder + root.getValue();
  
        if (root.hasRightChild()) {
           inOrderPrintTraversal(root.getRightChild());
        }

        return Global.inOrder;
  
     }

    private intBSTNode findRecursive(intBSTNode root, Integer val) {
        if(root.getValue()==val)
            return root;
        else if(root.hasLeftChild()&&root.getValue()>val)
            return findRecursive(root.getLeftChild(), val);
        else if(root.hasRightChild()&&root.getValue()<val)
            return findRecursive(root.getRightChild(), val);
        else{
            return null;
        }
    }

    private intBSTNode addRecursive(intBSTNode root, Integer val) {
        if (val < root.getValue()) {
            if (root.hasLeftChild())
               return addRecursive(root.getLeftChild(), val);
            else {
               intBSTNode child = new intBSTNode(val);
               root.setLeftChild(child);
               return child;
            }
         } else if (val > root.getValue()) {
            if (root.hasRightChild())
               return addRecursive(root.getRightChild(), val);
            else {
               intBSTNode child = new intBSTNode(val);
               root.setRightChild(child);
               return child;
            }
         } else {
            return root;
         }
      }

}
