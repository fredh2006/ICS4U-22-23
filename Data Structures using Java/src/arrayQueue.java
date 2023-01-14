public class arrayQueue {
    private arrayStack queue;
    
    public arrayQueue(){
        queue = new arrayStack();
    }

    public boolean isEmpty(){
        return queue.isEmpty();
    }

    public void clear(){
        queue = new arrayStack();
    }

    public boolean enqueue(Integer el){
        queue.push(el);
        return true;
    }

    public Integer dequeue(){
        return queue.pop(0);
    }

    public Integer peak(){
        return queue.get(0);
    }

    public Integer get(int index){
        if (index < 0)
            throw new IndexOutOfBoundsException("YOU SUCK");
        else if (index > queue.search()+1)
            throw new IndexOutOfBoundsException("YOU SUCK");
        else {
            return queue.get(index);
        } 
    
    }
}
