/* To add a smooth scrolling script to the links within the nav, I refered to the following article */
/* <Chris Coyler> (2018) <Sticky, Smooth, Active Nav> (<code version>) [Javascript/Source code] "https://css-tricks.com/sticky-smooth-active-nav/" */

let bodyNavLinks = document.querySelectorAll("nav ul li a");
let bodySections = document.querySelectorAll("main section");

let lastId;
let cur = [];

window.addEventListener("scroll", () => {
    _.throttle(doThatStuff, 100);
  });

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

