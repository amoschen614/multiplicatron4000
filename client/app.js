const multiply = require('./multiplier.js').multiply;

class ViewManager {
	connectEventHandlers() {
		document.getElementById('form-numbers').addEventListener('submit', this.onSubmit.bind(this));
	}
	onSubmit(event) {
		event.preventDefault();
		let num1 = document.getElementById('input-num1').value;
		let num2 = document.getElementById('input-num2').value;

		// cast the strings to ints
		num1 = parseInt(num1, 10);
		num2 = parseInt(num2, 10);

		// add the numbers
		const product = multiply(num1, num2);

		// output
		alert(product);
		this.renderProduct(product);
	}
	renderProduct(product) {
		document.getElementById('testProduct').textContent = product;
		document.querySelector('.product').textContent = product;
	}
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();
