function generateDate(date) {
	const year = date.getFullYear();
	const month =
		date.getMonth() + 1 < 10
			? '0' + (date.getMonth() + 1)
			: date.getMonth() + 1;

	const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

	const hours =
		date.getHours() < 10 ? '0' + date.getHours() : date.getHours();

	const minutes =
		date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

	return `📅 ${hours}:${minutes} / ${day}.${month}.${year}`;
}

function findElement(element, parent = document) {
	return parent.querySelector(element);
}
