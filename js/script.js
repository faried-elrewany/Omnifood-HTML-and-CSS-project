//________________________________________________________________________
// i learned this in (JONAS html and css udemy course) _thanks alot ^_^
//https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/?src=sac&kw=html+and+css
//_______________________________________________________________________

// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");
const height = document.querySelector("header").getBoundingClientRect().height;
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    threshold: 0,
    rootMargin: `-${height}px`,
  }
);
obs.observe(sectionHeroEl);

function callback(entries) {
  const [entry] = entries;
  console.log(entry.target);
  entry.target.classList.remove("reveal", entry.isIntersecting);
  observe.unobserve(entry.target);
}
const observe = new IntersectionObserver(callback, { threshold: 0.1 });

document.querySelectorAll("section:not(:first-child)").forEach((sec) => {
  observe.observe(sec);
  sec.classList.add("reveal");
});
