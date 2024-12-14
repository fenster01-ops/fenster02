(function () {
  document.addEventListener('click', burgerInit)

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')
    const burgerBtn = e.target.closest('.btn')
    const burgerAge = e.target.closest('.age')

    if (!burgerIcon && !burgerNavLink && !burgerBtn && !burgerAge) return

    // if (burgerIcon) {
    //   e.preventDefault()
    // }

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else {
      document.body.classList.remove('body--opened-menu')
    }


  }
// ----------------------------------
const accordionLists = document.querySelectorAll('.accordion__list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion__list-item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion__list-content')

            const accordionControl = e.target.closest('.accordion__list-control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion__list-item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion__list-item--opened');

            if (accordionItem.classList.contains('accordion__list-item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });
// ----------------------------------

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


// -------------------------------------




const swiper = new Swiper('.testimonials__slider', {
  
  spaceBetween: 30,
  slidesPerView: 3,


        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },
        breakpoints: {
          1366: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 2,
          },
          343: {
            slidesPerView: 1,
          },
          318: {
            slidesPerView: 1,
          },
        }
    });
})()


