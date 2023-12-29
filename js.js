const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    console.log(element);

    let position = element.offsetTop - 62;
    console.log(position);

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});
