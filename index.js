const menu = document.querySelector(".mobile-nav");
const menuButton = document.querySelector(".menu-btn");
const closeButton = document.querySelector("#close-btn");
const faqBtns = document.querySelectorAll(".faqs-btn");

function toggleMenu() {
    menu.classList.toggle("open");
    
  }


  

    function toggleFAQDescription(btn) {
        const description = btn.closest(".faqs-body-question").nextElementSibling;

        if (description.style.display === "none") {
          description.style.display = "flex";
          setTimeout(() => description.style.opacity = 1 , 100);
          btn.style.transform = "rotate(45deg)"
        //   description.style.opacity = 1; // Fade in
        } else {
          description.style.opacity = 0; // Fade out
          btn.style.transform = "rotate(0deg)"; 
          setTimeout(() => description.style.display = "none", 200); // Hide after fade animation
        }
      }
    
faqBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    toggleFAQDescription(btn);
  });
});
  
  
  menuButton.addEventListener("click", toggleMenu);
  closeButton.addEventListener("click", toggleMenu);
//   toggleFAQDescription()