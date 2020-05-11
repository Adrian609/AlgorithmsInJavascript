// stack class
class Stack {
    // Array is used to implement stack 
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    printstack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

let stack = new Stack();

console.log(stack.isEmpty());
console.log(stack.pop());

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.printstack());

console.log(stack.peek());

console.log(stack.pop());

console.log(stack.printstack());

function postFixEvaluation(exp) {
    for (let i = 0; i < exp.length; i++) {
        let c = exp[i];
        if (!isNaN(c)) {
            stack.push(c - '0');
        } else {
            let val1 = stack.pop();
            let val2 = stack.pop();
            if (val1 == "Underflow" || val2 == "Underflow") {

            }

            switch (c) {
                case '+':
                    stack.push(val2 + val1);
                    break;
                case '-':
                    stack.push(val2 / val1);
                    break;

                case '/':
                    stack.push(val2 * val1);
                    break;
            }
        }
    }
    return stack.pop();
}

console.log(postFixEvaluation('235*+8-'));
console.log(postFixEvaluation('23*+'));