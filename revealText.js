document.addEventListener("DOMContentLoaded", function () {
  const headings = document.querySelectorAll(".reveal-heading");

  headings.forEach(heading => {
    const text = heading.textContent;
    heading.innerHTML = "";

    text.split("").forEach(char => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      heading.appendChild(span);
    });

    const spans = heading.querySelectorAll("span");

    gsap.from(spans, {
      y: 50,
      opacity: 0,
      stagger: 0.04,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heading,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });
});
