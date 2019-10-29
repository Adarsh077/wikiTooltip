import "./styles.css";
import {
  card,
  ajax,
  wikiVertical,
  wikiHorizontal,
  handleMouseOver,
  handleMouseMove,
  handleMouseLeave
} from "./modules/UI.js";

if (window.innerWidth >= 922) {
  window.addEventListener("scroll", () => {
    const wrapper = document.querySelector("[data-hover-wrapper]");
    if (wrapper) wrapper.remove();
  });

  const wikipediaTooltipUrl =
    "https://en.wikipedia.org/api/rest_v1/page/summary/";

  const fetchData = ele => {
    const wikiSearchTerm = ele.getAttribute("data-wikitooltip");
    ajax(wikipediaTooltipUrl + wikiSearchTerm).then(info => {
      ajax(info.api_urls.media).then(data => {
        if (data.items.length > 0) {
          var img = new Image();
          let src = data.items[0].thumbnail.source;
          img.src = src;
          img.addEventListener(
            "load",
            () => {
              ele.setAttribute(
                "data-hover-content",
                img.height > img.width
                  ? wikiVertical(
                      data.items[0].thumbnail.source,
                      info.extract_html
                    )
                  : wikiHorizontal(
                      data.items[0].thumbnail.source,
                      info.extract_html
                    )
              );
            },
            false
          );
        } else {
          ele.setAttribute("data-hover-content", card(info.extract_html));
        }
      });
    });
  };

  document.querySelectorAll("[data-wikitooltip]").forEach(ele => {
    fetchData(ele);
    ele.addEventListener("mouseover", handleMouseOver);
    ele.addEventListener("mousemove", handleMouseMove);
    ele.addEventListener("mouseleave", handleMouseLeave);
  });
}
