$(function(){
     
    $('.slider-discont__list').slick({
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/right.svg" alt=""></button>',
    });

    $('.brands__list').slick({
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,

    });

    window.onscroll = function showHeader() {
        let header = document.querySelector('.header__bottom')

        if(window.pageYOffset > 52) {
            header.classList.add('header__bottom--scroll')
        } else {
            header.classList.remove('header__bottom--scroll')
        }
    };

    $('.header__user-link--card').on('click', function(event) {
        event.preventDefault();
        $('.basket').addClass('basket--show');
    });
    
    $('.btn-close').on('click', function(event) {
        event.preventDefault();
        $('.basket').removeClass('basket--show');
    });
    
    let containerEl1 = document.querySelector ('.top-product');
    let containerEl2 = document.querySelector ('.promo');
    
    let config = {
        controls: {
            scope: 'local'
        }
    };    

    var mixer = mixitup(containerEl1, config);
    var mixer1 = mixitup(containerEl2, config);
})