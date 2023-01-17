public class arrayQueue {
    private Integer[] queue;
    
    public arrayQueue(){
        queue = new Integer[0];
    }

    public boolean isEmpty(){
        return queue.length==0;
    }

    public void clear(){
        queue = new Integer[0];
    }

    public boolean enqueue(Integer el){
            Integer[] temp = new Integer[queue.length + 1];
            for (int i = 0; i < queue.length; i++) {
                temp[i] = queue[i];
            }
            queue = temp;
        queue[queue.length-1] = el;
        return true;
    }

    public Integer dequeue(){
        int remove = queue[0];
        Integer[] temp = new Integer[queue.length - 1];
        for (int i = 0, k = 0; i < queue.length; i++) {
            if (queue[i] != remove) {
                temp[k] = queue[i];
                k++;
            }
        }
        queue = temp;
        return remove;
    }

    public Integer peak(){
        return queue[0];
    }

    public Integer get(int index){
        if (index < 0)
            throw new IndexOutOfBoundsException("YOU SUCK");
        else if (index > queue.length)
            throw new IndexOutOfBoundsException("YOU SUCK");
        else {
            return queue[index];
        } 
    
    }
}
