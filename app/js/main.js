$(function(){
     
    $('.slider-discont__list').slick({
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/right.svg" alt=""></button>',

        responsive: [
            {
              breakpoint: 1600,
              settings: {
                    arrows: false,
                    dots: true,
              }  
                
            }
        ]
    });

    $('.brands__list').slick({
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,

        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
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
    

    $('.burger-menu').on('click', function(event) {
        event.preventDefault();
        $('.menu-mob').addClass('menu-mob--show');
    });
    
    $('.menu-mob__btn').on('click', function(event) {
        event.preventDefault();
        $('.menu-mob').removeClass('menu-mob--show');
    });

    $('.header__user-item--search').on('click', function(event) {
        event.preventDefault();
        $('.header__search').addClass('header__search--show');
    });
    
    $('.header__btn-search').on('click', function(event) {
        event.preventDefault();
        $('.header__search').removeClass('header__search--show');
    });

    $(window).on('load resize', function() {
        if ($(window).width() < 992) {
            $('input[type="search"]').attr('placeholder', 'Я ищу ...');
        } else {
            $('input[type="search"]').attr('placeholder', 'Найти в магазине ...');
        }
    });

    $(document).on('click', function(e) {
        if (!$(e.target).hasClass('header__search')){
            $('.header__search').removeClass('header__search--show');
        }
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