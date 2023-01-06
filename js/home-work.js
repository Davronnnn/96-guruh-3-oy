function longestWord(word) {
	const array = word.split(' ');

	let max = array[0];

	for (let i = 0; i < array.length; i++) {
		if (array[i].length > max.length) {
			max = array[i];
		}
	}
	return max;
}

const sentence = 'The quick brown fox jumped harfli over the lazy dog';

console.log(longestWord(sentence));
