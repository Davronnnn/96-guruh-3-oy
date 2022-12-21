const elForm = document.querySelector('form');
const elList = document.querySelector('#todo-list');
const elError = document.querySelector('#error');

if (elError.textContent === '') {
	elError.textContent = 'No todos yet';
}

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	const input = evt.target.input;

	if (input.value !== '') {
		elError.textContent = '';

		const elTodo = document.createElement('li');
		elTodo.textContent = input.value;
		elTodo.className = 'rounded-2 ps-3 shadow bg-light mt-2';

		elList.appendChild(elTodo);

		input.value = '';
	} else {
		elError.textContent = 'Please enter a todo';
	}
});
