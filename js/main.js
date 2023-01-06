const elForm = document.querySelector('#form-post');
const elCards = document.querySelector('.cards');
const elSelect = document.querySelector('#types-select');
const elSearch = document.querySelector('#search');
let filteredPosts = [];

let posts = [
	{
		id: 1,
		title: 'Post 1',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
		image: 'https://picsum.photos/200/300',
		date: new Date(),
		genres: ['sport', 'uzbekiston'],
	},
	{
		id: 2,
		title: 'Post 2',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
		image: 'https://picsum.photos/200/300',
		date: new Date(),
		genres: ['Sport'],
	},
	{
		id: 3,
		title: 'Post 3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
		image: 'https://picsum.photos/200/300',
		date: new Date(),
		genres: ['uzbekiston'],
	},
	{
		id: 4,
		title: 'Post 4',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
		image: 'https://picsum.photos/200/300',
		date: new Date(),
		genres: ['sport', 'siyosat'],
	},
	{
		id: 5,
		title: 'Post 5',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
		image: 'https://picsum.photos/200/300',
		date: new Date(),
		genres: ['sport', 'uzbekiston'],
	},
];

elSelect.addEventListener('change', () => {
	const type = elSelect.value;

	filteredPosts = [];

	if (type === 'all') {
		renderPosts(posts);
	} else {
		posts.forEach((post) => {
			post.genres.forEach((genre) => {
				if (genre.toLowerCase() === type.toLowerCase()) {
					filteredPosts.push(post);
				}
			});
		});

		renderPosts(filteredPosts);
	}
});

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

elCards.addEventListener('click', (evt) => {
	const target = evt.target;

	let newPosts = [];
	if (target.className.includes('delete-btn')) {
		const id = Number(target.dataset.id);

		posts.forEach((post) => {
			if (post.id !== id) {
				newPosts.push(post);
			}
		});
		posts = newPosts;
		renderPosts(posts);
	}
});

const renderPosts = (array, element = elCards) => {
	element.innerHTML = '';

	array.forEach((post) => {
		const newCard = document.createElement('div');

		const resultDate = generateDate(post.date);

		const newUl = document.createElement('ul');

		post.genres.forEach((element) => {
			const newLi = document.createElement('li');
			newLi.className = 'list-group-item';
			newLi.textContent = element;
			newUl.appendChild(newLi);
		});

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
						<div class="d-flex justify-content-between">
							<button data-id="${post.id}" class="btn btn-danger delete-btn"> Delete </button>
							<button data-id="${post.id}" class="btn btn-info"> Edit </button>
						</div>
					</div>
    `;

		element.appendChild(newCard);
	});
};

renderPosts(posts);

elForm.addEventListener('submit', (evt) => {
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
		id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
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
