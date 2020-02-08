const card = data => {
  return `
		<div class="card z-depth-4 wiki-card--horizontal">
		<div class="card-content">
			<p class="text-justify card1">${data}</p>
		</div>
	</div>`;
};

const Vertical = (image, data) => {
  return `
			<div class="card horizontal z-depth-4 wiki-card--vertical">
				<div class="card-image">
					<img class="card2-image"
						src="${image}">
				</div>
				<div class="card-stacked">
					<div class="card-content">
						<p class="text-justify card2">${data}
						</p>
					</div>
				</div>
			</div>`;
};

const Horizontal = (image, data) => {
  return `
			<div class="card z-depth-4 wiki-card--horizontal">
				<div class="card-image">
					<img class="card1-image"
						src="${image}">
				</div>
				<div class="card-content">
					<p class="text-justify card1">${data}</p>
				</div>
			</div>`;
};

export { Horizontal, Vertical, card };
