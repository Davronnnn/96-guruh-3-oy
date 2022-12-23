function findElement(element, parent = document) {
	return parent.querySelector(element);
}

const elForm = findElement('#form');
const elList = findElement('#todo-list');
const elError = findElement('#error');
const elClearBtn = findElement('#clear-btn');
const elThemeBtn = findElement('#theme-btn');
const products = ['Kartoshka', 'Piyoz', 'Qaymoq', 'Sabzi', 'Kurka'];

function renderTodos(array, parent = elList) {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		const li = document.createElement('li');
		li.textContent = element;
		li.className = 'rounded-2 ps-3 shadow bg-light mt-2';
		parent.appendChild(li);
	}
}

renderTodos(products);

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	// add to array
	const input = evt.target.input;
	if (input.value !== '') {
		products.push(input.value);
	} else {
		elError.textContent = 'Please enter a todo';
	}
	console.log(products);

	// render array
	elList.textContent = null;
	renderTodos(products);

	input.value = null;
});

elClearBtn.addEventListener('click', function () {
	elList.textContent = null;
	elClearBtn.style.display = 'none';
});

if (elError.textContent === '') {
	elError.textContent = 'No todos yet';
}

elThemeBtn.addEventListener('click', function () {
	document.body.classList.toggle('dark');

	if (elThemeBtn.textContent === 'Dark Mode') {
		elThemeBtn.textContent = 'Light Mode';
	} else {
		elThemeBtn.textContent = 'Dark Mode';
		elThemeBtn.style.color = 'var(--primary-text-color)';
	}

	elThemeBtn.textContent === 'Dark Mode'
		? (elThemeBtn.textContent = 'Light Mode')
		: (elThemeBtn.textContent = 'Dark Mode');
	elThemeBtn.style.color = 'var(--primary-text-color)';
});

// 	const elTodo = document.createElement('li');
// 	elTodo.textContent = input.value;
// 	elTodo.className = 'rounded-2 ps-3 shadow bg-light mt-2';

// 	elList.appendChild(elTodo);
