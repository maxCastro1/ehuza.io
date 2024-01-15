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

document.getElementById('menu-button').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  var arrow = document.getElementById('products-arrow');
  console.log(arrow)
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'flex';
    arrow.style.transform = "rotate(-180deg)"
  } else {
    menu.style.display = 'none';
    arrow.style.transform = "rotate(0deg)"
  }
});
document.getElementById('menu-button-mobile').addEventListener('click', function() {
  var menu = document.getElementById('menu-mobile');
  var arrow = document.getElementById('products-arrow-mobile');
  console.log(arrow)
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'flex';
    arrow.style.transform = "rotate(-180deg)"
  } else {
    menu.style.display = 'none';
    arrow.style.transform = "rotate(0deg)"
  }
});

document.getElementById('menu-button-company').addEventListener('click', function() {
  var menu = document.getElementById('menu-company');
  var arrow = document.getElementById('company-arrow');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'flex';
    arrow.style.transform = "rotate(-180deg)"
  } else {
    menu.style.display = 'none';
    arrow.style.transform = "rotate(0deg)"
  }
});
document.getElementById('menu-button-compan-mobile').addEventListener('click', function() {
  console.log("cki")
  var menu = document.getElementById('menu-company-mobile');
  var arrow = document.getElementById('company-arrow-mobile');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'flex';
    arrow.style.transform = "rotate(-180deg)"
  } else {
    menu.style.display = 'none';
    arrow.style.transform = "rotate(0deg)"
  }
});

var headers = document.getElementsByClassName('hero-title');
var images = document.getElementsByClassName('img-cont-hero-page');
var count = 0;

function switchHeaderAndImage() {
  console.log(headers)
  if(headers.length === 0) {
    return
  }
  else {
    headers[count].classList.add('hidden');
    images[count].classList.add('hidden');
    count = (count + 1) % headers.length; // Loop back to 0 when count reaches the number of headers/images
    headers[count].classList.remove('hidden');
    images[count].classList.remove('hidden');
  }

}

window.onload = function() {
    setInterval(switchHeaderAndImage, 15000); // Switch headers and images every 5 seconds
};


