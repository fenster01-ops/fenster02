(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }

    }

    const tabControls = document.querySelector('.tab__controls')

    tabControls.addEventListener('click', openTab)
    function openTab(e) {

        const tabControl = e.target.closest('.tab__controls-link')

        if (!tabControl) return

        e.preventDefault()
        if (tabControl.classList.contains('tab__controls-link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab__controls-link--active')
        const activeContent = document.querySelector('.tab-content--show')

        activeContent.classList.remove('tab-content--show')
        tabContent.classList.add('tab-content--show')

        activeControl.classList.remove('tab__controls-link--active')
        tabControl.classList.add('tab__controls-link--active')
    }

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });



    const swiper = new Swiper('.gallery__slider', {

        spaceBetween: 15,
        slidesPerView: 2,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            601: {
                spaceBetween: 32,
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32,
            },
            1001: {
                slidesPerView: 4,
            }
        }
    });
// ---------------------------------


new Swiper('.testimonials__slider', {

    spaceBetween: 0,
    slidesPerView: 1.5,
    centeredSlides: true,

    navigation: {
        nextEl: '.testimonials__next',
        prevEl: '.testimonials__prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
        901: {
            slidesPerView: 1.5,
        },
        1201: {
            slidesPerView: 2.1,
        }
    }
});

const telInputs = document.querySelectorAll('input[type="tel"]')
const im = new Inputmask('+7(999) 999-99-99')
im.mask(telInputs)

})()