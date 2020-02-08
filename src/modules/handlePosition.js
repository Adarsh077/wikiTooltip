export default e => {
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
