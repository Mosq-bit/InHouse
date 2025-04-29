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

    document.addEventListener('DOMContentLoaded', () => {
  const swiperConfig = {
    // Core configuration
    slidesPerView: 1.1, // Mobile-first default
    spaceBetween: 15,
    loop: true,
    speed: 600,
    effect: 'slide',
    centeredSlides: true, // Default for mobile
    
    // Navigation elements
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // Enhanced pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: number => number.toString().padStart(2, '0'),
      formatFractionTotal: number => number.toString().padStart(2, '0'),
    },
    
    // Autoplay configuration
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      waitForTransition: true // Smoother autoplay
    },
    
    // Optimized breakpoints (mobile-first)
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false
      },
      768: {
        slidesPerView: 2.5, // Shows part of next slide
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: false
      }
    },
    
    // Touch optimization
    touchStartPreventDefault: false,
    touchRatio: 1,
    grabCursor: true,
    resistanceRatio: 0.85,
    
    // Performance enhancements
    watchSlidesProgress: true,
    preventClicks: false,
    preventClicksPropagation: false,
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
      loadOnTransitionStart: true
    },
    
    // Keyboard & accessibility
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    
    a11y: {
      enabled: true,
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      notificationClass: 'swiper-notification'
    },
    
    // Observer for dynamic content
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    
    // Event callbacks for better control
    on: {
      init() {
        this.autoplay.running = true;
      },
      resize() {
        this.update();
      }
    }
  };

  const swiper = new Swiper('.kits__mySwiper', swiperConfig);
});
