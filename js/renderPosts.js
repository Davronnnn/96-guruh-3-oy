const renderPosts = (array, element = elCards) => {
	element.innerHTML = '';

	

	array.forEach((post) => {
		const newCard = document.createElement('div');

		newCard.className = 'card col-12 col-sm-5 col-md-3';

		const resultDate = generateDate(post.date);

		const newUl = document.createElement('ul');

		post.genres.forEach((genre) => {
			const newLi = document.createElement('li');
			newLi.className = 'list-group-item';
			newLi.textContent = genre;
			newUl.appendChild(newLi);
		});

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
							<button data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-id="${post.id}" class="btn btn-info "> Edit </button>
						</div>
					</div>
    `;

		element.appendChild(newCard);
	});
};
