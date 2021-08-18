$(function(){
     
    $('.slider-discont__list').slick({
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/content/icons/left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/content/icons/right.svg" alt=""></button>',

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
        $('body').addClass('overlay');
    });
    
    $('.btn-close').on('click', function(event) {
        event.preventDefault();
        $('.basket').removeClass('basket--show');
        $('body').removeClass('overlay');
    });

    $('.wrapper').on("click", function(e) {
          $('body').removeClass('overlay');
          $(".basket").removeClass("basket--show"); 
      });

    $('.burger-menu').on('click', function(event) {
        event.preventDefault();   
        $('.menu-mob').addClass('menu-mob--show');
        $('body').addClass('overlay-mob');
    });
    
    $('.menu-mob__btn').on('click', function(event) {
        event.preventDefault();
        $('.menu-mob').removeClass('menu-mob--show');
        $('body').removeClass('overlay-mob');
    });

    $(document).on("click", function(e) {
        if (($(e.target).is(".menu-mob--show") === false)
        &&
        ($(e.target).hasClass('burger-menu') === false)
        ) {
          $('body').removeClass('overlay-mob');
          $(".menu-mob").removeClass("menu-mob--show");
        }
      });

    $('.header__user-link--search').on('click', function(event) {
        event.preventDefault();
        $('.header__search').addClass('header__search--showw');
    });
    
    $('.header__btn-search').on('click', function(event) {
        event.preventDefault();
        $('.header__search').removeClass('header__search--showw');
    });

    $(document).on("click", function(e) {
        if (($(e.target).is(".header__search--showw") === false)
        &&
        ($(e.target).hasClass('js-search') === false)
        && (!$(e.target).hasClass('header__user-link--search'))
        ) {
          $(".header__search").removeClass("header__search--showw");
        }
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
    
    $('.header__catalog').hover(() => {
      $('.header__catalog-list').slideToggle(350);
    })  

    $('.basket-card__btn--minus').on("click", function(e) {
      let count = $(this).parent().children('.basket-card__num').val()
      if (+count > 1) {
        $(this).parent().children('.basket-card__num').val(count - 1);
      }
    });

    $('.basket-card__btn--plus').on("click", function(e) {
      let count = $(this).parent().children('.basket-card__num').val()
      $(this).parent().children('.basket-card__num').val(+count + 1);
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