const elInput = document.querySelector('#number-input');
const elCircle1 = document.querySelector('.circle-1');
const elCircle2 = document.querySelector('.circle-2');

const elBtn0 = document.querySelector('#btn0');
const elBtn1 = document.querySelector('#btn1');
const elBtn2 = document.querySelector('#btn2');
const elBtn3 = document.querySelector('#btn3');
const elBtn4 = document.querySelector('#btn4');
const elBtn5 = document.querySelector('#btn5');
const elBtn6 = document.querySelector('#btn6');
const elBtn7 = document.querySelector('#btn7');
const elBtn8 = document.querySelector('#btn8');
const elBtn9 = document.querySelector('#btn9');

function resetHandler() {
	elInput.value = '';
	elCircle1.className = 'circle circle-1';
	elCircle2.className = 'circle circle-2';
	elCircle1.textContent = '';
	elCircle2.textContent = '';
}

function checkInput() {
	if (elInput.value >= 0 && elInput.value < 10) {
		elCircle1.className += ' circle--active';
		elCircle1.textContent = 'Active';
		elCircle2.className = 'circle circle-2';
		elCircle2.textContent = '';
	} else if (elInput.value >= 10 && elInput.value < 100) {
		elCircle2.className += ' circle--active';
		elCircle2.textContent = 'Active';
		elCircle1.className = 'circle circle-1';
		elCircle1.textContent = '';
	}
}

function inputHandler(value) {
	if (
		elInput.value === '' ||
		(elInput.value < 10 && elInput.value.length < 2)
	) {
		elInput.value += value;
	}
}

function eventHandler(elBtn, value) {
	elBtn.addEventListener('click', function () {
		inputHandler(value);
		checkInput();
	});
}

eventHandler(elBtn0, '0');
eventHandler(elBtn1, '1');
eventHandler(elBtn2, '2');
eventHandler(elBtn3, '3');
eventHandler(elBtn4, '4');
eventHandler(elBtn5, '5');
eventHandler(elBtn6, '6');
eventHandler(elBtn7, '7');
eventHandler(elBtn8, '8');
eventHandler(elBtn9, '9');
