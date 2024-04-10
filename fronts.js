class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }
    addFront(val) {
        let new_node = new Node(val);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head
        this.head = new_node;
        return console.log(this);
    }
    removeFront() {
        //  no need for an argument
        if(!this.head){
            return console.log("Null")
        }
        this.head = this.head.next
        return console.log(this)
    }
    front() {
        if(!this.head){
            return console.log('null')
        }
        console.log(this.head.data)
    }
}
SLL = new SLL()
SLL.addFront(76)
SLL.addFront(2)
SLL.addFront(11.41)
// SLL.removeFront()
// SLL.removeFront()
// SLL.removeFront()
SLL.front()