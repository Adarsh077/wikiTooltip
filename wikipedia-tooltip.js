// UI
const IACNKPLVNV = document.getElementsByTagName("a");

[...IACNKPLVNV].forEach(link => {
  link.addEventListener("mouseover", WLSINMFKZD);
  link.addEventListener("mousemove", TJCBAMLPUR);
  link.addEventListener("mouseleave", ZBBAFUFSPN);
});

function ODDDVTJOKN(e) {
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

function WLSINMFKZD(e) {
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
  wrapper.setAttribute("style", ODDDVTJOKN(e));
  
  // You can remove this line when you are using. I had added for the demo.
  if (document.querySelector('.info')) document.querySelector('.info').remove();
  
}

function ZBBAFUFSPN(e) {
  const ID = e.target.getAttribute("data-hover-id");
  document.getElementById(ID).style.opacity = 0;
  document.getElementById(ID).style.transform = "scale(.8)";
  setTimeout(() => {
    document.getElementById(ID).remove();
  }, 150);
}

function TJCBAMLPUR(e) {
  const ID = e.target.getAttribute("data-hover-id");
  const wrapper = document.getElementById(ID);
  wrapper.setAttribute("style", ODDDVTJOKN(e));
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

const wikiTooltip = ele => {
  const wikiSearchTerm = $(ele).attr('data-wiki');
  $.ajax({
    url: wikipediaTooltipUrl + wikiSearchTerm,
    success: info => {
      $.ajax({
        url: info.api_urls.media,
        success: data => {
          let content = `
            <div class='hover-content' title='${info.title.display}'>
              <img src='${data.items[0].thumbnail.source}' />
              <p>${info.extract_html}.</p>
            </div>
          `
          $(ele).attr('data-hover-content', content)
        }
      })
    }
  })
}

$('[data-wiki]').each((i, ele) => wikiTooltip(ele));