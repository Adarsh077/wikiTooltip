const randomString = () => {
  let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm",
    string = "";
  for (let i = 0; i < 10; i++) string += char[Math.round(Math.random() * 51)];
  return string;
};

const handlePosition = e => {
  const ID = e.target.getAttribute("data-hover-id"),
    wrapper = document.getElementById(ID),
    { top, left, right, bottom } = e.target.getBoundingClientRect();

  let posLeft = wrapper.offsetWidth > window.innerWidth - right ? right : left,
    posTop =
      wrapper.offsetHeight > window.innerHeight - bottom
        ? top - wrapper.offsetHeight
        : bottom;
  return `position: fixed; left: ${posLeft}px; top:${posTop}px`;
};

const handleMouseLeave = e => {
  const ID = e.target.getAttribute("data-hover-id");
  document.getElementById(ID).style.opacity = 0;
  document.getElementById(ID).style.transform = "scale(.8)";
  setTimeout(() => document.getElementById(ID).remove(), 150);
};

const handleMouseMove = e => {
  const ID = e.target.getAttribute("data-hover-id");
  const wrapper = document.getElementById(ID);
  wrapper.setAttribute("style", handlePosition(e));
};

const handleMouseOver = e => {
  const hoverContent = e.target.getAttribute("data-hover-content");
  const ID = randomString();
  const wrapper = document.createElement("DIV");
  e.target.setAttribute("data-hover-id", ID);
  wrapper.setAttribute("data-hover-wrapper", "");
  wrapper.setAttribute("id", ID);
  wrapper.setAttribute("style", "opacity: 0; transform: scale(.8)");
  wrapper.innerHTML = hoverContent;
  document.body.append(wrapper);
  wrapper.setAttribute("style", handlePosition(e));
};

const ajax = url =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200)
        resolve(JSON.parse(this.responseText));
      else if (this.readyState === 4 && this.status != 200)
        reject("Error code: " + this.status);
    };
    xhr.open("GET", url, true);
    xhr.send();
  });
const wikiVertical = (image, data) => {
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
const wikiHorizontal = (image, data) => {
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

const card = data => {
  return `
		<div class="card z-depth-4 wiki-card--horizontal">
		<div class="card-content">
			<p class="text-justify card1">${data}</p>
		</div>
	</div>`;
};
export {
  card,
  ajax,
  wikiVertical,
  wikiHorizontal,
  handleMouseOver,
  handleMouseMove,
  handleMouseLeave
};
