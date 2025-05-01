document.addEventListener("DOMContentLoaded", function () {
  const headings = document.querySelectorAll(".reveal-heading");

  headings.forEach(heading => {
    const text = heading.textContent.trim();
    heading.innerHTML = "";

    // Divide o texto em palavras
    const words = text.split(" ");

    // Cria <span> para cada palavra
    words.forEach((word, i) => {
      const span = document.createElement("span");
      span.textContent = word + " "; // manter o espaço original
      span.style.display = "inline-block";
      heading.appendChild(span);
    });

    const spans = heading.querySelectorAll("span");

    gsap.from(spans, {
      y: 30,
      opacity: 0,
      stagger: 0.08,
      duration: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heading,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });
});
