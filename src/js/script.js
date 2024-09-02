// menu
let hamIcon = document.getElementById('hamIcon');
let mobileMenu = document.querySelector('.mobileMenu');
let dropdownBtn =Array.from(document.getElementsByClassName('dropdownBtn'));
let dropdownBtn2 =Array.from(document.getElementsByClassName('dropdownBtn2'));


dropdownBtn.forEach((item)=>{
  item.addEventListener('click', function () {
    item.querySelector('.arrowSvg').classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})
dropdownBtn2.forEach((item)=>{
  item.addEventListener('click', function () {
    item.querySelector('.arrowSvg').classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})
hamIcon.addEventListener('click', function () {
  hamIcon.classList.toggle('active');
  document.querySelector('.mobileMenu').classList.toggle('active');
})



// change language

let langItems = Array.from(document.querySelectorAll('.langDropdown > div'));
let languageLink = Array.from(document.querySelectorAll('.language-link'));
let langDropdown = Array.from(document.querySelectorAll('.langDropdown'));
let langIcons = Array.from(document.querySelectorAll('.langIcon'));
let swiper = Array.from(document.querySelectorAll('.swiper'));

languageLink.forEach((item) => {
  item.addEventListener('click', function () {
    langDropdown.forEach((item) => {
      item.classList.toggle('active');
    })
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.langDropdown') && !event.target.closest('.language-link')) {
        langDropdown.forEach((item) => {
          item.classList.remove('active');
        })
      }
    })
  })
})

langItems.forEach((item) => {
  item.addEventListener('click', function () {
    let langIcon = item.querySelector('img').src;
    langIcons.forEach((item) => [
      item.src = langIcon
    ])
    langDropdown.forEach((item) => {
      item.classList.remove('active');
    })
    let tabId = item.dataset.id;
    if (tabId == 1) {
      document.getElementById('langText').textContent = 'ENG';
      document.getElementById('langText2').textContent = 'ENG';
      document.documentElement.dir = 'ltr';
      swiper.forEach((item)=>{
        item.dir='ltr';
      })
    }
    if (tabId == 2) {
      document.getElementById('langText').textContent = 'فارسی';
      document.getElementById('langText2').textContent = 'فارسی';
      document.documentElement.dir = 'rtl';
    }
  })
});

// select color

let color = Array.from(document.querySelectorAll('.colors > div'));

color.forEach((item)=>{
  item.addEventListener('click', function () {
    color.forEach((items)=>{items.classList.remove('active')});
    item.classList.toggle('active');
  })
})

// input number

let increment = Array.from(document.getElementsByClassName('increment'));
let decrement = Array.from(document.getElementsByClassName('decrement'));

increment.forEach((item)=>{
  item.addEventListener('click', function () {
    item.previousElementSibling.value ++;
  })
});
decrement.forEach((item)=>{
  item.addEventListener('click', function () {
    if (item.nextElementSibling.value > 1) {
      item.nextElementSibling.value --;
    }
  })
});

// see all

let seeAll= Array.from(document.getElementsByClassName('seeAll'));

seeAll.forEach((item)=>{
  item.addEventListener('click', function () {
    item.previousElementSibling.classList.add('active');
    item.style.display= 'none';
  })
})

// tabs

let tab = Array.from(document.querySelectorAll('.tabs .swiper-slide'));
let tabContent = Array.from(document.querySelectorAll('.tabContent > div'));
let orderTabs = Array.from(document.querySelectorAll('.tabs p'));

tab.forEach((item) => {
  item.addEventListener('click', function() {
      tab.forEach((items) => {items.classList.remove('active')});
      item.classList.add('active');
  })
})

orderTabs.forEach((item) => {
  item.addEventListener('click', function() {
    orderTabs.forEach((items) => {items.classList.remove('active')});
      item.classList.add('active');
      let tabId = item.dataset.id;
      tabContent.forEach((content) => {
          let contentId = content.dataset.id;
          if (tabId === contentId) {
              content.classList.add('active');
          } else {
            content.classList.remove('active');
          }
      })
  })
})

// acordion

let acordionBtn = Array.from(document.getElementsByClassName('acordionBtn'));

acordionBtn.forEach((item)=> {
  item.addEventListener('click', function () {
    item.nextElementSibling.classList.toggle('active');
    item.querySelector('img').classList.toggle('active');
    item.querySelector('.arrow').classList.toggle('active');
  })
})


// swiper

var bannerSwiper = new Swiper(".bannerSwiper", {
  slidesPerView: 1,
  spaceBetween: 90,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var categorySwiper = new Swiper(".categorySwiper", {
  slidesPerView: 1.5,
  spaceBetween: 22,
  autoplay: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  },
});
var suggestionSwiper = new Swiper(".suggestionSwiper", {
  slidesPerView: 2.2,
  spaceBetween: 0,
  autoplay: true,
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
    }
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var solutionSwiper = new Swiper(".solutionSwiper", {
  slidesPerView: 2,
  spaceBetween: 8,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
});
var workSwiper = new Swiper(".workSwiper", {
  slidesPerView: 2,
  spaceBetween: 8,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
  pagination: {
    el: ".swiper-pagination4",
    clickable: true,
  },
});

var customers = new Swiper(".customers", {
  slidesPerView: 2,
  spaceBetween: 16,
  autoplay: true,
  loop:true,
  breakpoints: {
    576: {
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  pagination: {
    el: ".swiper-pagination5",
    clickable: true,
  },
});
var customers2 = new Swiper(".customers2", {
  slidesPerView: 1,
  spaceBetween: 16,
  autoplay: true,
  loop:true,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});
var categorySwiper2 = new Swiper(".categorySwiper2", {
  slidesPerView: 1.3,
  spaceBetween: 32,
  autoplay: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1300: {
      slidesPerView: 5,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var business = new Swiper(".business", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var mySwiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var mySwiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: mySwiper,
  },
});
var tabs = new Swiper(".tabs", {
  slidesPerView: 2,
  spaceBetween: 0,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 6,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var karbord = new Swiper(".karbord", {
  slidesPerView: 1.3,
  spaceBetween: 24,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
