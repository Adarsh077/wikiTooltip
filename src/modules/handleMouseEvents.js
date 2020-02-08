import handlePosition from "./handlePosition";
import randomString from "./randomString";

const handleMouseMove = e => {
  const ID = e.target.getAttribute("data-hover-id");
  const wrapper = document.getElementById(ID);
  wrapper.setAttribute("style", handlePosition(e));
};

const handleMouseLeave = e => {
  const ID = e.target.getAttribute("data-hover-id");
  document.getElementById(ID).style.opacity = 0;
  document.getElementById(ID).style.transform = "scale(.8)";
  setTimeout(() => document.getElementById(ID).remove(), 150);
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

export { handleMouseMove, handleMouseOver, handleMouseLeave };
