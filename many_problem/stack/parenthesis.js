
/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 
*/

class Stack{
	constructor(){
		this.data = [];
		this.top = 0;
	}

	push(value){
		this.data[this.top] = value;
		this.top++;
	}

	isOpening(value){
		const opens = ["(", "[", "{"];
		return opens.indexOf(value) > -1;
	}

	isClosing(value){
		let closing = [")", "]", "}"];
		return closing.indexOf(value) > -1
	}

	
	print(){
		let top = this.top;

		while(top-- > 0){
			console.log(top);
			console.log("stack element", this.data[top]);
		}
	}
}

let stack = new Stack();

stack.push(5);
stack.push(1);
stack.push(6);
stack.push(7);
stack.push(3);
stack.print();