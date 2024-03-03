var swiper = new Swiper(".competences-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1068: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

let zoom = document.querySelector(".zoom");
let imgZoom = document.getElementById("imgZoom");

zoom.addEventListener("mousemove", (event) => {
  imgZoom.style.opacity = 1;
  let positionPx = event.x - zoom.getBoundingClientRect().left;
  let positionX = (positionPx / zoom.offsetWidth) * 100;

  let positionPy = event.y - zoom.getBoundingClientRect().top;
  let positionY = (positionPy / zoom.offsetHeight) * 100;

  imgZoom.style.setProperty("--zoom-x", positionX + "%");
  imgZoom.style.setProperty("--zoom-y", positionY + "%");

  let transformX = -(positionX - 50) / 3.5;
  let transformY = -(positionY - 50) / 3.5;
  imgZoom.style.transform = `scale(1.5) translateX(${transformX}%) translateY(${transformY}%)`;
});
zoom.addEventListener("mouseout", () => {
  imgZoom.style.opacity = 0;
});
