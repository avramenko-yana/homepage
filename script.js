 
document.addEventListener("DOMContentLoaded", () => {
  const introText = document.querySelector(".intro_text");
  const avatar = document.querySelector(".contact-info__avatar");
  const blocks = document.querySelectorAll(".resume__block");
 
  let text = introText.textContent;
  introText.textContent = "";
  let i = 0;
  const typing = setInterval(() => {
    introText.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(typing);
  }, 30);

   
  avatar.style.transition = "transform 1.2s ease, box-shadow 1.2s";
  avatar.addEventListener("mouseenter", () => {
    avatar.style.transform = "scale(1.1)";
    avatar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
  });
  avatar.addEventListener("mouseleave", () => {
    avatar.style.transform = "scale(1)";
    avatar.style.boxShadow = "none";
  });

   
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.2 }
  );

  blocks.forEach(block => {
    block.style.opacity = 0;
    block.style.transform = "translateY(50px)";
    block.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    observer.observe(block);
  });
});
