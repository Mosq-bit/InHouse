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
    delay: 3000, // Интервал в миллисекундах (3 секунды)
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

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.kits__mySwiper', {
    // Базовые параметры для мобильных
    slidesPerView: 1,
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    
    // Навигация
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // Пагинация
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
      },
      formatFractionTotal: function (number) {
        return ('0' + number).slice(-2);
      },
    },
    
    // Эффекты
    effect: 'slide',
    speed: 600,
    
    // Автопрокрутка (раскомментировать при необходимости)
    /*
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    */
    
    // Адаптивные брейкпоинты
    breakpoints: {
      // 360px и выше
      360: {
        slidesPerView: 1.1,
        spaceBetween: 15,
        centeredSlides: true
      },
      // 480px и выше
      480: {
        slidesPerView: 1.3,
        spaceBetween: 15,
        centeredSlides: true
      },
      // 640px и выше
      640: {
        slidesPerView: 1.8,
        spaceBetween: 20,
        centeredSlides: false
      },
      // 768px и выше
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false
      },
      // 992px и выше
      992: {
        slidesPerView: 3,
        spaceBetween: 25
      },
      // 1200px и выше
      1200: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    },
    
    // Дополнительные улучшения для мобильных
    touchRatio: 1,
    simulateTouch: true,
    touchAngle: 45,
    grabCursor: true,
    resistance: true,
    resistanceRatio: 0.85,
    
    // Keyboard control
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    
    // Accessibility
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    }
  });
});