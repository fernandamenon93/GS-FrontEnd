
 
  const backToTop = document.createElement("button");
  backToTop.id = "back-to-top";
  backToTop.innerText = "⬆";
  document.body.appendChild(backToTop);

  
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

const cards = document.querySelectorAll('.benefit-card, .impact-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

cards.forEach((card) => {
  observer.observe(card);
});


const gifs = [
  "img/gif1.gif", 
  "img/gif2.gif", 
  "img/gif3.gif", 
  "img/gif4.gif", 
  "img/gif5.gif",
  "img/gif6.gif",
  "img/gif7.gif"
]; 

const gifElement = document.getElementById("background-gif");
let currentGifIndex = 0;

function changeGif() {
  currentGifIndex = (currentGifIndex + 1) % gifs.length; 
  gifElement.src = gifs[currentGifIndex];
}

setInterval(changeGif, 5000);