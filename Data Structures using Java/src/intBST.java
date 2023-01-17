public class intBST {
    private intBSTNode root;

    public intBST() {
        this.root = null;
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

    public void preOrderPrintTraversal(){
        preOrderPrintTraversal(root);
    }

    public void preOrderPrintTraversal(intBSTNode root){
        System.out.println(root.getValue());
        if(root.hasLeftChild()){
            preOrderPrintTraversal(root.getLeftChild());
        }

        if(root.hasRightChild()){
            preOrderPrintTraversal(root.getRightChild());
        }
    }

    public void postOrderPrintTraversal(){
        postOrderPrintTraversal(root);
    }

    public void postOrderPrintTraversal(intBSTNode root){
        if(root.hasLeftChild()){
            postOrderPrintTraversal(root.getLeftChild());
        }

        if(root.hasRightChild()){
            postOrderPrintTraversal(root.getRightChild());
        }

        System.out.println(root.getValue());
    }
    
    public void inOrderPrintTraversal(){
        inOrderPrintTraversal(root);
    }

    public void inOrderPrintTraversal(intBSTNode root){
        if(root.hasLeftChild()){
            inOrderPrintTraversal(root.getLeftChild());
        }

        System.out.println(root.getValue());

        if(root.hasRightChild()){
            inOrderPrintTraversal(root.getRightChild());
        }
    }

    private intBSTNode findRecursive(intBSTNode root2, Integer val) {
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
