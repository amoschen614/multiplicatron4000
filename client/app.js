const multiplyAll = require('./multiplier.js').multiplyAll;

class ViewManager {
	connectEventHandlers() {
		document.getElementById('form-numbers').addEventListener('submit', this.onSubmit.bind(this));
		document.getElementById('new-factor').addEventListener('click', this.onClick.bind(this));
	}
	onClick(event) {
		event.preventDefault();
		var container = document.getElementById('container');
		var newDiv = document.createElement('div');
		var newElement = document.createElement('input');
		newDiv.setAttribute('id', 'parent');
		newElement.setAttribute('class', 'form-numbers');
		container.appendChild(newElement);
		formElements.push(newElement);
	}
	onSubmit(event) {
		event.preventDefault();

		let factors = [];
		for (var i = 0; i < formElements.length; i++) {
			factors.push(parseInt(formElements[i].value, 10));
			console.log(i + ': ' + factors[factors.length-1]);
		}
		console.log('num factors: ' + factors.length);
		const product = multiplyAll(factors);
		alert(product);
/*
		let num1 = document.getElementById('input-num1').value;
		let num2 = document.getElementById('input-num2').value;

		// cast the strings to ints
		num1 = parseInt(num1, 10);
		num2 = parseInt(num2, 10);

		// multiply the numbers
		const product = multiply(num1, num2);

		// output
		alert(product);
		this.renderProduct(product);
*/
	}
	renderProduct(product) {
		document.getElementById('product').textContent = product;
		document.querySelector('.product').textContent = product;
	}
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();

var formElements = [];
formElements.push(document.getElementById('input-num1'));
formElements.push(document.getElementById('input-num2'));

function addFields(){
	console.log('addFields called');
    // Number of inputs to create
    var number = document.getElementById("member").value;
    // Container <div> where dynamic content will be placed
    var container = document.getElementById("container");
    // Clear previous contents of the container
    while (container.hasChildNodes()) {
    	container.removeChild(container.lastChild);
    }
    for (i=0;i<number;i++){
        // Append a node with a random text
        container.appendChild(document.createTextNode("Member " + (i+1)));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.type = "text";
        input.name = "member" + i;
        container.appendChild(input);
        // Append a line break 
        container.appendChild(document.createElement("br"));
    }
}
//addFields();
