
var $header_top = $('.header-top');
var $nav = $('nav');

$header_top.find('a').on('click', function () {
    $(this).parent().toggleClass('open-menu');
});

$('#fullpage').fullpage({
    // 每個頁面的backgroundcolor
    // sectionsColor: ['#FF60AF', '#348899', '#ff8b20', '#ff5757', '#ffd03c'],

    // 選擇我要scroll的區塊
    sectionSelector: '.vertical-scrolling',

    // 右邊的珠珠
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    // 頁面茅點
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
    menu: '#menu',

    afterLoad: function (anchorLink, index) {
        $header_top.css('background', 'rgba(0, 47, 77, .3)');
        $nav.css('background', 'rgba(0, 47, 77, .25)');
        if (index == 5) {
            $('#fp-nav').hide();
        }
    },

    onLeave: function (index, nextIndex, direction) {
        if (index == 5) {
            $('#fp-nav').show();
        }
    },


});

// ==================Jinx特效=====================================

console.clear();

const { gsap, Splitting } = window;

Splitting();

gsap.set('.cards__wrapper', { autoAlpha: 1 })

gsap.timeline({
    defaults: {
        duration: 1.25,
        stagger: 0.125,
        ease: "expo.inOut",
    },
})
    .fromTo(".card__image--wrapper", { yPercent: 110 }, { yPercent: 0 }, 0)
    .fromTo(".card__image--outer", { yPercent: -110 }, { yPercent: 0 }, 0)
    .set(".cards__wrapper, .card", { pointerEvents: "all" }, "-=1");



//hover 菲艾照片特效 ============================================
let hoverDistort1 = new hoverEffect({
    parent: document.querySelector(".vi_pictures"),
    intensity: 0.5,
    image1: "img/vi1.jpg",
    image2: "img/vi3.jpg",
    displacementImage: "img/vi2.jpg",
    imagesRatio: 1,
});


const timeLine = gsap.timeline({ defaults: { ease: "power1.out" } })
console.log(timeLine.to);
timeLine.to('.vi_text', { y: "0%", duration: 1.5 })

// ============================caitlyn 輪播圖 


const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    autoplay: {
        delay: 3000,
    },
    effect: "cube",
    loop: true,
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


// =======================維克特動畫

const victor = document.querySelector('.victor_img')
const victorBox = document.querySelector('.victor_img_container')

victorBox.addEventListener('mouseenter', popIn)
victorBox.addEventListener('mouseleave', popOut)

function popIn() {
    victor.style.transitionDuration = '0.3s'
    victor.style.transform = 'translate(0%, 0%) scale(1.2)'
}

function popOut() {
    victor.style.transitionDuration = '0.3s'
    victor.style.transform = 'translate(-50%, -50%) scale(0)'
}
