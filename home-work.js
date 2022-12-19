const elPerson = document.querySelector('#person');
const elBicycle = document.querySelector('#bicycle');
const elCar = document.querySelector('#car');
const elPlane = document.querySelector('#plane');
const elInput = document.querySelector('#input');
const elForm = document.querySelector('#form');
const elReset = document.querySelector('#resetButton');
const header = document.querySelector('#header');

function generateTime(space, speed) {
	const fullTime = space / speed;
	const hour = Math.floor(fullTime);
	const minute = Math.floor((fullTime - hour) * 60);
	const second = Math.floor(((fullTime - hour) * 60 - minute) * 60);

	return `${hour} soat, ${minute} daqiqa, ${second}  soniyada yetib keladi `;
}

elReset.addEventListener('click', function () {
	elPerson.textContent = 'N soat';
	elBicycle.textContent = 'N soat';
	elCar.textContent = 'N soat';
	elPlane.textContent = 'N soat';
});

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();

	const space = Number(elInput.value);

	elInput.value = '';

	const personSpeed = 3.6;
	const bicycleSpeed = 20.1;
	const carSpeed = 70;
	const planeSpeed = 800;

	if (!isNaN(space)) {
		elPerson.textContent = generateTime(space, personSpeed);
		elBicycle.textContent = generateTime(space, bicycleSpeed);
		elCar.textContent = generateTime(space, carSpeed);
		elPlane.textContent = generateTime(space, planeSpeed);
	} else {
		console.log('raqam kiriting');
	}
});
