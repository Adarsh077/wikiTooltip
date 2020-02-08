import "./styles.css";
import {
  card,
  ajax,
  Vertical,
  Horizontal,
  handleMouseOver,
  handleMouseMove,
  handleMouseLeave
} from "./modules";

const baseUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";

// Remove Tooltip on Scroll
window.addEventListener("scroll", () => {
  const wrapper = document.querySelector("[data-hover-wrapper]");
  if (wrapper) wrapper.remove();
});

const renderCard = async ele => {
  const wikiSearchTerm = ele.getAttribute("data-wikitooltip");

  const info = await ajax(baseUrl + wikiSearchTerm);
  let media = await ajax(info.api_urls.media);
  media = media.items[0].thumbnail.source;

  if (media) {
    const img = new Image();
    img.src = media;
    const tooltip =
      img.height > img.width
        ? Vertical(media, info.extract_html)
        : Horizontal(media, info.extract_html);
    img.addEventListener("load", () =>
      ele.setAttribute("data-hover-content", tooltip, false)
    );
  } else {
    ele.setAttribute("data-hover-content", card(info.extract_html));
  }
};

document.querySelectorAll("[data-wikitooltip]").forEach(ele => {
  renderCard(ele);
  ele.addEventListener("mouseover", handleMouseOver);
  ele.addEventListener("mousemove", handleMouseMove);
  ele.addEventListener("mouseleave", handleMouseLeave);
});
