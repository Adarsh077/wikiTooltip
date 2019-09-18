/**
 * 
 * 480 word per card-content.
 * 
 */

// UI
const links = document.getElementsByTagName("a");


function ellipsizeTextBox(height, id) {
	document.querySelector('.card2').style.height = height - 48 + 'px';
	var el = document.querySelector(id);
	var wordArray = el.innerHTML.split(' ');
	while (el.scrollHeight > el.offsetHeight) {
		wordArray.pop();
		el.innerHTML = wordArray.join(' ') + '...';
	}
}

[...links].forEach(link => {
	link.addEventListener("mouseover", handleMouseOver);
	link.addEventListener("mousemove", handleMouseMove);
	link.addEventListener("mouseleave", handleMouseLeave);
});
function handlePosition(e) {
	const ID = e.target.getAttribute("data-hover-id");
	const wrapper = document.getElementById(ID);
	let top = "";
	if (
		!(e.target.getBoundingClientRect().top + wrapper.offsetHeight > innerHeight)
	) {
		top = `${e.clientY + e.target.offsetHeight}px`;
	} else {
		top = `${e.clientY - (wrapper.offsetHeight + e.target.offsetHeight)}px`;
	}
	return `position: fixed; left: ${e.clientX -
		wrapper.offsetWidth / 2}px; top:${top}`;
}

function handleMouseOver(e) {
	const hoverContent = e.target.getAttribute("data-hover-content");
	const ID = Math.random()
		.toString(36)
		.substr(2, 9);
	const wrapper = document.createElement("DIV");
	e.target.setAttribute("data-hover-id", ID);
	wrapper.setAttribute("data-hover-wrapper", "");
	wrapper.setAttribute("id", ID);
	wrapper.setAttribute("style", "opacity: 0; transform: scale(.8)");
	wrapper.innerHTML = hoverContent;
	document.body.append(wrapper);
	wrapper.setAttribute("style", handlePosition(e));
}

function handleMouseLeave(e) {
	const ID = e.target.getAttribute("data-hover-id");
	document.getElementById(ID).style.opacity = 0;
	document.getElementById(ID).style.transform = "scale(.8)";
	setTimeout(() => {
		document.getElementById(ID).remove();
	}, 150);
}

function handleMouseMove(e) {
	const ID = e.target.getAttribute("data-hover-id");
	const wrapper = document.getElementById(ID);
	wrapper.setAttribute("style", handlePosition(e));

}

window.addEventListener('scroll', () => {
	const wrapper = document.querySelector('[data-hover-wrapper]');
	if (wrapper) wrapper.remove();
});

// Ajax
/**
 * From wikiUrl
 * Title : .title.display
 * Description : .extract
 * mediaUrl : .api_urls.media;
 */

/**
 * From mediaUrl
 * SVG : .items[0].original.source 
 *              OR
 * PNG : .items[0].thumbnail.source
 */

const wikipediaTooltipUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';

const wikiVertical = (image, data) => `
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
	</div>
`
const wikiHorizontal = (image, data) => `
	<div class="card z-depth-4 wiki-card--horizontal">
		<div class="card-image">
			<img class="card1-image"
				src="${image}">
			<span class="card-title">Card Title</span>
		</div>
		<div class="card-content">
			<p class="text-justify card1">${data}</p>
		</div>
	</div>`

// const wikiHorizontal = (image, data) =

const wikiTooltip = ele => {
	const wikiSearchTerm = $(ele).attr('data-wiki');
	$.ajax({
		url: wikipediaTooltipUrl + wikiSearchTerm,
		success: info => {
			$.ajax({
				url: info.api_urls.media,
				success: data => {
					let content = wikiHorizontal(data.items[0].thumbnail.source, info.extract_html)
					$(ele).attr('data-hover-content', content)
				}
			})
		}
	})
}

$('[data-wiki]').each((i, ele) => wikiTooltip(ele));


/* <div class='hover-content' title='${info.title.display}'>
	<img src='${data.items[0].thumbnail.source}' />
	<p>${info.extract_html}.</p>
</div> */