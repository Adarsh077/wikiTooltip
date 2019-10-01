if(window.innerWidth >= 922){
	const randomString = () => {
		let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm';
		let string = '';
		for (let i = 0; i < 10; i++) {
			string += char[Math.round(Math.random() * 51)];
		}
		return string;
	}
	
	function handlePosition(e) {
		let posLeft, posTop;
		const ID = e.target.getAttribute("data-hover-id");
		const wrapper = document.getElementById(ID);
		const {top, left, right, bottom} = e.target.getBoundingClientRect();
		posLeft = wrapper.offsetWidth > window.innerWidth - right ? left - wrapper.offsetWidth : left;
		posTop = wrapper.offsetHeight > window.innerHeight - bottom ? top - wrapper.offsetHeight : bottom;
		return `position: fixed; left: ${posLeft}px; top:${posTop}px`;
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
	
	function handleMouseOver(e) {
		const hoverContent = e.target.getAttribute("data-hover-content");
		const ID = randomString();
		const wrapper = document.createElement("DIV");
		e.target.setAttribute("data-hover-id", ID);
		wrapper.setAttribute("data-hover-wrapper", "");
		wrapper.setAttribute("id", ID);
		wrapper.setAttribute("style", "opacity: 0; transform: scale(.8)");
		wrapper.innerHTML = hoverContent;
		document.body.append(wrapper);
		console.log(handlePosition(e))
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
			</div>`
	}
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
			</div>`
	}
	
	const card = data => {
		return  `
		<div class="card z-depth-4 wiki-card--horizontal">
		<div class="card-content">
			<p class="text-justify card1">${data}</p>
		</div>
	</div>`
	}
	
	const ajax = ({ url, success }) => {
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200) {
				success(JSON.parse(this.responseText));
			}
		}
		xhr.open('GET', url, true);
		xhr.send();
	}
	
	const wikiTooltip = ele => {
		const wikiSearchTerm = ele.getAttribute('data-wikitooltip');
		ajax({
			url: wikipediaTooltipUrl + wikiSearchTerm,
			success: info => {
				ajax({
					url: info.api_urls.media,
					success: data => {
						if(data.items.length > 0){
							var img = new Image();
							let src = data.items[0].thumbnail.source;
							img.src = src;
							img.addEventListener('load', () => {
								ele.setAttribute('data-hover-content', img.height > img.width ?
								wikiVertical(data.items[0].thumbnail.source, info.extract_html) :
								wikiHorizontal(data.items[0].thumbnail.source, info.extract_html))
							}, false)
						} else {
							console.log(card(info.extract_html))
							ele.setAttribute('data-hover-content', card(info.extract_html))
						}
					}
				})
			}
		})
	}
	
	document.querySelectorAll('[data-wikitooltip]').forEach(ele => { 
		wikiTooltip(ele);
		ele.addEventListener("mouseover", handleMouseOver);
		ele.addEventListener("mousemove", handleMouseMove);
		ele.addEventListener("mouseleave", handleMouseLeave); 
	})
}