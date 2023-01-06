const elForm = document.querySelector('#form-post');
const elCards = document.querySelector('.cards');

const posts = [
	{
		title: 'Post 1',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
		image: 'https://picsum.photos/200/300',
		date: new Date(),
		genres: ['sport', 'uzbekiston'],
	},
];
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

const renderPosts = (array, element = elCards) => {
	element.innerHTML = '';
	for (let i = 0; i < array.length; i++) {
		const post = posts[i];

		const newCard = document.createElement('div');

		const resultDate = generateDate(post.date);

		const newUl = document.createElement('ul');

		for (let i = 0; i < post.genres.length; i++) {
			const element = post.genres[i];
			const newLi = document.createElement('li');
			newLi.className = 'list-group-item';
			newLi.textContent = element;
			newUl.appendChild(newLi);
		}
		newCard.className = 'card col-12 col-sm-5 col-md-3';
		newCard.innerHTML = `
                    <img
						class="card-img-top"
						src="${post.image}"
						alt="${post.title}"
					/>
					<div class="card-body">
						<h3 class="card-title">
							${post.title}
						</h3>
						<p class="card-text">
							${post.description}
						</p>
                        ${newUl.outerHTML}
						<p class="card-date">${resultDate}</p>
					</div>
    `;

		element.appendChild(newCard);
	}
};

renderPosts(posts);

const funksiya = elForm.addEventListener('submit', (evt) => {
	evt.preventDefault();

	const title = evt.target.title.value;
	const description = evt.target.description.value;
	const image = evt.target.image.value;
	const genresElement = evt.target.genres;

	const genres = [];

	for (let i = 0; i < genresElement.length; i++) {
		const element = genresElement[i];

		if (element.checked) {
			genres.push(element.value);
		}
	}

	const newPost = {
		title: title,
		description: description,
		image: image,
		date: new Date(),
		genres: genres,
	};

	posts.push(newPost);

	renderPosts(posts);

	elForm.reset();
});
