const elForm = findElement('#form-post');
const elCards = findElement('.cards');
const elSelect = findElement('#types-select');
const elSearch = findElement('#search');
const formEdit = findElement('#form-edit');

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

elSearch.addEventListener('input', (e) => {
	let element = e.target; //asdasd

	let array = [];

	posts.forEach(function (post) {
		if (post.title.toLowerCase().includes(element.value.toLowerCase())) {
			array.push(post);
		}
	});

	renderPosts(array);
});

elCards.addEventListener('click', (evt) => {
	const target = evt.target;

	if (target.className.includes('delete-btn')) {
		let newPosts = [];
		const id = Number(target.dataset.id);

		posts.forEach((post) => {
			if (post.id !== id) {
				newPosts.push(post);
			}
		});
		posts = newPosts;
		renderPosts(posts);
	}

	if (target.className.includes('btn-info')) {
		const id = Number(target.dataset.id);

		posts.forEach((post) => {
			if (post.id === id) {
				const title = formEdit.title;
				const description = formEdit.description;
				const image = formEdit.image;
				const img = formEdit.querySelector('img');
				const editBtn = document.querySelector('#edit');

				img.src = post.image;
				img.alt = post.title;

				const genreElement = formEdit.genres;

				const genres = post.genres;

				const sportGenre = formEdit.querySelector('#sport');
				const uzbGenre = formEdit.querySelector('#uzb');
				const siyosatGenre = formEdit.querySelector('#siyosat');

				title.value = post.title;
				description.value = post.description;
				image.value = post.image;

				sportGenre.checked = false;
				uzbGenre.checked = false;
				siyosatGenre.checked = false;

				for (let i = 0; i < genres.length; i++) {
					const genre = genres[i];

					if (genre.toLowerCase() === 'sport') {
						sportGenre.checked = true;
					}
					if (genre.toLowerCase() === 'uzbekiston') {
						uzbGenre.checked = true;
					}
					if (genre.toLowerCase() === 'siyosat') {
						siyosatGenre.checked = true;
					}
				}

				editBtn.addEventListener('click', (evt) => {
					const newGenres = [];

					for (let i = 0; i < genreElement.length; i++) {
						const element = genreElement[i];
						if (element.checked) {
							newGenres.push(element.value);
						}
					}

					const newPost = {
						id: post.id,
						title: title.value,
						description: description.value,
						image: image.value,
						date: new Date(),
						genres: newGenres,
					};

					posts[id - 1] = newPost;

					renderPosts(posts);
				});
			}
		});
	}
});
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
