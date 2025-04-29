var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 9000,
    disableOnInteraction: false, // Продолжать автопрокрутку после взаимодействия
  },
  speed: 1000,
  effect: 'coverflow',
  grabCursor: true,
  coverflowEffect: {
    rotate: 20,
    depth: 300,
    slideShadows: false,
  },
  loop: true,
  speed: 800,
  autoplay: {
    delay: 2000,
  },
  mousewheel: true,
  keyboard: true,
});



var swiper = new Swiper('.kits__mySwiper', {
  slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 25
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});
