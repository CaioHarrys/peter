const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

console.log("harrys passou aqui");

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Ativa o primeiro por padrão
  navLinks[0].classList.add("active");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active")); // Remove todos
      this.classList.add("active"); // Ativa o clicado
    });
  });
});
