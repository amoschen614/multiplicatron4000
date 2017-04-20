const multiplyAll = require('./multiplier.js').multiplyAll;

class ViewManager {
	connectEventHandlers() {
		document.getElementById('form-numbers').addEventListener('submit', this.onSubmit.bind(this));
		document.getElementById('new-factor').addEventListener('click', this.onClick.bind(this));
	}
	onClick(event) {
		event.preventDefault();
		var newElement = document.createElement('input');
		formElements.push(newElement);
		newElement.setAttribute('id', 'input-num' + formElements.length);
		newElement.setAttribute('type', 'text');
		newElement.setAttribute('autocomplete', 'off');
		(document.getElementById('form-numbers').insertBefore(document.createElement('div'), document.getElementById('end-input'))).appendChild(newElement);
	}
	onSubmit(event) {
		event.preventDefault();
		let factors = [];
		for (var i = 0; i < formElements.length; i++) {
			factors.push(parseInt(formElements[i].value, 10));
		}
		const product = multiplyAll(factors);
		this.renderProduct(product);
	}
	renderProduct(product) {
		document.getElementById('product').textContent = product;
//		document.querySelector('.product').textContent = product;
	}
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();

var formElements = [];
formElements.push(document.getElementById('input-num1'));
formElements.push(document.getElementById('input-num2'));
